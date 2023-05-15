import React, { useState } from 'react';
import './DiceRoller.css';

function DiceRoller() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const rollDice = () => {
    setDice1(Math.floor(Math.random() * 6) + 1);
    setDice2(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div>
      <div>
        <div className={`dice die-${dice1}`}></div>
        <div className={`dice die-${dice2}`}></div>
      </div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default DiceRoller;
