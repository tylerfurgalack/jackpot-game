import React, { useState } from 'react';
import './LettersNumbers.css';

const LettersNumbers = ({ dice1, dice2, sum }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const handleClick = (num) => {
    if (selectedNumbers.includes(num)) {
      // Deselect the number if it's already selected
      setSelectedNumbers(
        selectedNumbers.filter((selectedNum) => selectedNum !== num)
      );
    } else {
      // Select the number if it's clicked
      setSelectedNumbers([...selectedNumbers, num]);
    }
  };

  return (
    <div className="empty-boxes-container">
      {numbers.map((num) => {
        const isHighlighted = num === dice1 || num === dice2 || num === sum;
        const isSelected = selectedNumbers.includes(num);

        return (
          <div
            key={num}
            className={`empty-box ${isHighlighted ? 'highlighted-box' : ''} ${
              isSelected ? 'selected-box' : ''
            }`}
            onClick={() => handleClick(num)}
          >
            {isSelected ? 'x' : num}
          </div>
        );
      })}
    </div>
  );
};

export default LettersNumbers;
