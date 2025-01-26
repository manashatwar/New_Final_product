import React from 'react';

const GameInfo = ({ currentPlayer, gameStatus }) => {
    return (
        <div className="game-info">
            <h2>Chess Game</h2>
            <div className="player-turn">
                <p>Current Turn: {currentPlayer.toUpperCase()} Player</p>
            </div>
            <div className="game-status">
                <p>{gameStatus}</p>
            </div>
        </div>
    );
};

export default GameInfo;