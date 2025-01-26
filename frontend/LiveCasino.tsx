import React from 'react';
    
    function LiveCasino() {
      return (
        <div className="p-6 bg-gunmetal rounded-lg overflow-y-auto max-h-[calc(100vh-4rem)]">
          <h2 className="text-3xl font-bold text-white-smoke mb-6">How to Play Chess: The Definitive Guide</h2>
    
          <p className="text-gray-300 text-lg mb-4">
            Chess is a timeless game of strategy, intellect, and skill played on an 8x8 checkered board. The ultimate goal is to outwit your opponent and deliver checkmate to their king. This guide delves deeper into the game’s mechanics, strategic principles, and advanced techniques to elevate your play.
          </p>
    
          <h3 className="text-2xl font-semibold text-white-smoke mt-8 mb-4">1. The Chessboard and Initial Setup</h3>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">The Chessboard</h4>
          <p className="text-gray-300 text-lg mb-4">
            The chessboard comprises 64 alternating light and dark squares.
          </p>
          <p className="text-gray-300 text-lg mb-4">
            Proper board orientation: The square at the bottom-right corner should be light-colored.
          </p>
    
          <h4 className="text-xl font-semibold text-gray-400 mb-2">The Pieces and Their Placement</h4>
          <p className="text-gray-300 text-lg mb-4">
            Each player begins with 16 pieces:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>1 King</li>
            <li>1 Queen</li>
            <li>2 Rooks</li>
            <li>2 Bishops</li>
            <li>2 Knights</li>
            <li>8 Pawns</li>
          </ul>
          <p className="text-gray-300 text-lg mb-4">
            Place pieces in the back rank as follows:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Rooks occupy the corners.</li>
            <li>Knights are next to the rooks.</li>
            <li>Bishops flank the king and queen.</li>
            <li>The queen aligns with her color (white queen on white, black queen on black).</li>
            <li>The king occupies the remaining square.</li>
            <li>Pawns form a protective line in front.</li>
          </ul>
    
          <h3 className="text-2xl font-semibold text-white-smoke mt-8 mb-4">2. Movement of Pieces</h3>
          <p className="text-gray-300 text-lg mb-4">
            Each piece has unique movement capabilities:
          </p>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">King</h4>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Moves one square in any direction.</li>
            <li>Cannot move into or remain in check (a threatened position).</li>
          </ul>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Queen</h4>
          <p className="text-gray-300 text-lg mb-4">
            The most versatile piece, moving any number of squares vertically, horizontally, or diagonally.
          </p>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Rook</h4>
          <p className="text-gray-300 text-lg mb-4">
            Moves any number of squares along a rank or file (horizontally or vertically).
          </p>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Bishop</h4>
          <p className="text-gray-300 text-lg mb-4">
            Moves diagonally across any number of squares, confined to its original color (light or dark).
          </p>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Knight</h4>
          <p className="text-gray-300 text-lg mb-4">
            Moves in an L-shape: two squares in one direction and one perpendicular square. Can jump over other pieces.
          </p>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Pawn</h4>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Moves forward one square (two squares on its initial move) but captures diagonally.</li>
            <li>Upon reaching the opponent’s back rank, a pawn may be promoted to any piece (except a king).</li>
          </ul>
    
          <h3 className="text-2xl font-semibold text-white-smoke mt-8 mb-4">3. Special Moves in Chess</h3>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Castling</h4>
          <p className="text-gray-300 text-lg mb-4">
            A move involving the king and a rook to improve king safety. Conditions:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Neither the king nor the chosen rook may have moved previously.</li>
            <li>No pieces can obstruct the path between the king and rook.</li>
            <li>The king may not move through or land on a square under attack.</li>
          </ul>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">En Passant</h4>
          <p className="text-gray-300 text-lg mb-4">
            A special pawn capture:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>If an opponent’s pawn advances two squares from its starting position and lands beside your pawn, you may capture it as if it had only moved one square forward. This move must be executed immediately.</li>
          </ul>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Pawn Promotion</h4>
          <p className="text-gray-300 text-lg mb-4">
            When a pawn reaches the opponent’s back rank, it is promoted to any piece of the player’s choice (usually a queen).
          </p>
    
          <h3 className="text-2xl font-semibold text-white-smoke mt-8 mb-4">4. Objectives and Key Game States</h3>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Check</h4>
          <p className="text-gray-300 text-lg mb-4">
            A king is in check when directly threatened by an opponent’s piece. You must respond by:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Moving the king out of check.</li>
            <li>Blocking the attack.</li>
            <li>Capturing the attacking piece.</li>
          </ul>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Checkmate</h4>
          <p className="text-gray-300 text-lg mb-4">
            The game ends when the king is in check and cannot escape. This is the ultimate goal of chess.
          </p>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Stalemate</h4>
          <p className="text-gray-300 text-lg mb-4">
            Occurs when a player has no legal moves and their king is not in check, resulting in a draw.
          </p>
    
          <h3 className="text-2xl font-semibold text-white-smoke mt-8 mb-4">5. Strategic Principles</h3>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">The Opening</h4>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Develop your pieces rapidly: Prioritize activating knights and bishops.</li>
            <li>Control the center (e.g., e4, d4, e5, d5 squares) to dominate the board.</li>
            <li>Castle early to safeguard your king and connect your rooks.</li>
          </ul>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">The Middlegame</h4>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Coordinate your pieces for maximum efficiency. Pieces work better together.</li>
            <li>Create tactical opportunities, such as forks (attacking two pieces simultaneously), pins (restricting piece movement), and skewers (forcing powerful pieces to move and exposing weaker ones).</li>
            <li>Avoid overextending and leaving your king vulnerable.</li>
          </ul>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">The Endgame</h4>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Convert advantages into victory. A pawn promotion can be decisive.</li>
            <li>Use your king actively to support pawns and limit the opponent’s movement.</li>
            <li>Master techniques such as opposition (controlling critical squares in king-versus-king scenarios).</li>
          </ul>
    
          <h3 className="text-2xl font-semibold text-white-smoke mt-8 mb-4">6. Advanced Concepts</h3>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Piece Coordination</h4>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Develop a harmonious strategy where pieces support one another, maximizing their potential.</li>
            <li>Avoid placing multiple pieces on vulnerable squares.</li>
          </ul>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Pawn Structure</h4>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Maintain strong pawn chains. Weak pawns (isolated, doubled, or backward pawns) can become targets.</li>
            <li>Use pawns to control key squares and restrict your opponent’s movement.</li>
          </ul>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Positional Play</h4>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Focus on controlling critical squares, open files, and diagonals.</li>
            <li>Avoid unnecessary trades unless they improve your position.</li>
          </ul>
          <h4 className="text-xl font-semibold text-gray-400 mb-2">Tactics vs. Strategy</h4>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Tactics are short-term opportunities to gain material or deliver threats (e.g., forks, pins, skewers).</li>
            <li>Strategy involves long-term planning, such as controlling the center or creating weaknesses in the opponent’s position.</li>
          </ul>
    
          <h3 className="text-2xl font-semibold text-white-smoke mt-8 mb-4">7. Etiquette and Best Practices</h3>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Always respect your opponent: Shake hands before and after the game.</li>
            <li>Adhere to the touch-move rule—if you touch a piece, you must move it.</li>
            <li>Stay focused and think ahead: Anticipate your opponent’s threats and respond proactively.</li>
          </ul>
    
          <h3 className="text-2xl font-semibold text-white-smoke mt-8 mb-4">8. Crypto Chess: Winning Strategies</h3>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Play with Precision: In high-stakes games, every move counts. Avoid impulsive decisions and analyze your position carefully.</li>
            <li>Learn from Mistakes: Review your games to identify errors and improve.</li>
            <li>Practice openings, endgames, and tactical patterns to build a strong foundation.</li>
            <li>Manage Risk: Bet strategically. Start with smaller stakes to build confidence and experience before moving to higher-level matches.</li>
          </ul>
    
          <h3 className="text-2xl font-semibold text-white-smoke mt-8 mb-4">Final Thoughts</h3>
          <p className="text-gray-300 text-lg mb-4">
            Chess is not just a game but a battle of minds where every move carries weight. Master the fundamentals, embrace strategy, and refine your skills to dominate the board. Whether for fun or stakes, chess rewards focus, patience, and creativity. Let your journey begin!
          </p>
    
          <h3 className="text-2xl font-semibold text-white-smoke mt-8 mb-4">Disclaimer: Risk of Financial Loss</h3>
          <p className="text-gray-300 text-lg mb-4">
            This platform involves financial transactions using cryptocurrency. By participating, you acknowledge that:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-4">
            <li>Risks are inherent: The outcome of chess games may result in financial loss.</li>
            <li>No guarantees: Success depends on skill and strategy, but winning is not assured.</li>
            <li>Cryptocurrency volatility: The value of cryptocurrency can fluctuate significantly and may impact your earnings.</li>
          </ul>
          <p className="text-gray-300 text-lg mb-4">
            We encourage responsible play and recommend wagering only what you can afford to lose. Always understand the risks before engaging in any financial activity.
          </p>
        </div>
      );
    }
    
    export default LiveCasino;
