import { WebSocketServer } from 'ws';
import url from 'url';

// Create a WebSocket server
const server = new WebSocketServer({ port: 8080 });

// Hardcoded token for validation (you can replace it with a dynamic or secure mechanism)
const VALID_TOKEN = 'test-token';

server.on('connection', (socket, req) => {
    // Extract token from query string
    const query = url.parse(req.url, true).query;
    const token = query.token;

    if (token !== VALID_TOKEN) {
        console.log(`Invalid token received: ${token}`);
        socket.close(4001, 'Invalid token');
        return;
    }

    console.log('Client connected successfully with valid token');

    // Initialize the game state
    let gameState = {
        board: [
            ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
            ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
            ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
        ],
        currentPlayer: 'white',
        moveHistory: [],
    };

    // Send initial game state
    socket.send(JSON.stringify(gameState));

    // Listen for messages from the client
    socket.on('message', (message) => {
        try {
            const updatedGameState = JSON.parse(message);

            // Update server-side game state
            gameState = updatedGameState;

            // Broadcast the updated game state to all clients
            server.clients.forEach((client) => {
                if (client.readyState === 1) {
                    client.send(JSON.stringify(gameState));
                }
            });
        } catch (error) {
            console.error('Error parsing message:', error);
        }
    });

    socket.on('close', (code, reason) => {
        console.log(`Client disconnected: Code ${code}, Reason: ${reason}`);
    });
});

console.log('WebSocket server running on ws://localhost:8080');
