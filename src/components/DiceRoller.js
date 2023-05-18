import React, { useState } from 'react';
import './DiceRoller.css';
import LettersNumbers from './LettersNumbers';

function DiceRoller() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const rollDice = () => {
    setDice1(Math.floor(Math.random() * 6) + 1);
    setDice2(Math.floor(Math.random() * 6) + 1);
  };

  const sum = dice1 + dice2;

  return (
    <div>
      <div>
        <LettersNumbers dice1={dice1} dice2={dice2} sum={sum} />
        <div className={`dice die-${dice1}`}></div>
        <div className={`dice die-${dice2}`}></div>
      </div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default DiceRoller;
