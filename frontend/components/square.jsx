import React from 'react';

const Square = ({ piece, onClick, isSelected }) => {
    return (
        <div
            className={`square ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
            {piece}
        </div>
    );
};

export default Square;