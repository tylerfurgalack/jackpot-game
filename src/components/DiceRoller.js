import React, { useState } from 'react';
import './DiceRoller.css';
import LettersNumbers from './LettersNumbers';

function DiceRoller() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const sum = dice1 + dice2;
  const [choice, setChoice] = useState(null);

  const rollDice = () => {
    setDice1(Math.floor(Math.random() * 6) + 1);
    setDice2(Math.floor(Math.random() * 6) + 1);
    setChoice(null); // Reset choice when dice values change
  };

  const handleChoice = (num) => {
    setChoice(num);
  };

  return (
    <div>
      <LettersNumbers
        dice1={dice1}
        dice2={dice2}
        sum={sum}
        choice={choice}
        handleChoice={handleChoice}
      />
      <div className={`dice die-${dice1}`}></div>
      <div className={`dice die-${dice2}`}></div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default DiceRoller;
