import React from 'react';

const MoveHistory = ({ moves }) => {
    return (
        <div className="move-history">
            <h3>Move History</h3>
            <ul>
                {moves.map((move, index) => (
                    <li key={index}>{move}</li>
                ))}
            </ul>
        </div>
    );
};

export default MoveHistory;