import React, { useState } from 'react';
import './LettersNumbers.css';
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const jackpot = ['.', 'J', 'A', 'C', 'K', 'P', 'O', 'T', '.'];

const LettersNumbers = ({ dice1, dice2, sum, choiceMade, setChoiceMade }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const handleClick = (num) => {
    setSelectedNumbers([...selectedNumbers, num]);
    setChoiceMade(true);
  };

  return (
    <div className="empty-boxes-container">
      {numbers.map((num) => {
        const isHighlighted = num === dice1 || num === dice2 || num === sum;
        const isSelected = selectedNumbers.includes(num);

        return (
          <button
            key={num}
            className={`empty-box ${
              isHighlighted && !isSelected ? 'highlighted-box' : ''
            } ${isSelected ? 'selected-box' : ''}`}
            onClick={() => handleClick(num)}
            disabled={isSelected || !isHighlighted || choiceMade}
          >
            {isSelected ? jackpot[num - 1] : num}
          </button>
        );
      })}
    </div>
  );
};

export default LettersNumbers;
