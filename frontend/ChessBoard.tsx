import React, { useState, useEffect } from 'react';
import Square from "./components/Square";
import GameInfo from "./components/GameInfo";
import MoveHistory from "./components/MoveHistory";
const ChessBoard = () => {
    const [board, setBoard] = useState(initializeBoard());
    const [currentPlayer, setCurrentPlayer] = useState('white');
    const [selectedPiece, setSelectedPiece] = useState(null);
    const [moveHistory, setMoveHistory] = useState([]);
    const [socket, setSocket] = useState(null);

    // WebSocket connection setup
    useEffect(() => {
        const connectWebSocket = () => {
            const token = 'test-token'; // Must match the server's VALID_TOKEN
            const ws = new WebSocket(`ws://localhost:8080?token=${token}`);

            ws.onopen = () => {
                console.log('WebSocket connection established');
                setSocket(ws);
            };

            ws.onmessage = (event) => {
                try {
                    const gameState = JSON.parse(event.data);
                    setBoard(gameState.board);
                    setCurrentPlayer(gameState.currentPlayer);
                    setMoveHistory(gameState.moveHistory);
                } catch (error) {
                    console.error('Failed to parse game state:', error);
                }
            };

            ws.onclose = (event) => {
                console.log(`WebSocket closed: ${event.code} - ${event.reason}`);
                setTimeout(connectWebSocket, 3000); // Reconnect after 3 seconds
            };

            ws.onerror = (error) => {
                console.error('WebSocket error:', error);
                ws.close();
            };
        };

        connectWebSocket();

        return () => {
            if (socket) {
                socket.close();
            }
        };
    }, []);

    // Initialize the chessboard
    function initializeBoard() {
        return [
            ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
            ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
            ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
        ];
    }

    // Handle square clicks
    const handleSquareClick = (row, col) => {
        const clickedPiece = board[row][col];

        if (!selectedPiece) {
            if (isPlayersPiece(clickedPiece, currentPlayer)) {
                setSelectedPiece({ row, col });
            }
            return;
        }

        if (isValidMove(selectedPiece, { row, col })) {
            const newBoard = board.map((row) => [...row]);
            const moveNotation = `${currentPlayer}: ${String.fromCharCode(
                97 + selectedPiece.col
            )}${8 - selectedPiece.row} to ${String.fromCharCode(97 + col)}${8 - row}`;
            const updatedMoveHistory = [...moveHistory, moveNotation];

            newBoard[row][col] = newBoard[selectedPiece.row][selectedPiece.col];
            newBoard[selectedPiece.row][selectedPiece.col] = ' ';

            const updatedGameState = {
                board: newBoard,
                currentPlayer: currentPlayer === 'white' ? 'black' : 'white',
                moveHistory: updatedMoveHistory,
            };

            setBoard(newBoard);
            setCurrentPlayer(updatedGameState.currentPlayer);
            setMoveHistory(updatedMoveHistory);
            setSelectedPiece(null);

            if (socket && socket.readyState === WebSocket.OPEN) {
                socket.send(JSON.stringify(updatedGameState));
            }
        } else {
            setSelectedPiece(null);
        }
    };

    const isPlayersPiece = (piece, player) => {
        const whitePieces = ['♙', '♖', '♘', '♗', '♕', '♔'];
        const blackPieces = ['♟', '♜', '♞', '♝', '♛', '♚'];

        return (player === 'white' && whitePieces.includes(piece)) ||
            (player === 'black' && blackPieces.includes(piece));
    };

    const isValidMove = (from, to) => {
        return from.row !== to.row || from.col !== to.col;
    };

    return (
        <div className="chess-game">
            <GameInfo currentPlayer={currentPlayer} gameStatus="Game Started" />
            <div className="game-container">
                <div className="chess-board">
                    {board.map((row, rowIndex) => (
                        <div key={rowIndex} className="board-row">
                            {row.map((piece, colIndex) => (
                                <Square
                                    key={colIndex}
                                    piece={piece}
                                    onClick={() => handleSquareClick(rowIndex, colIndex)}
                                    isSelected={
                                        selectedPiece?.row === rowIndex &&
                                        selectedPiece?.col === colIndex
                                    }
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <MoveHistory moves={moveHistory} />
            </div>
        </div>
    );
};

export default ChessBoard;
