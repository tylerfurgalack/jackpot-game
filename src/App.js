import React from 'react';
import './App.css';
import DiceRoller from './components/DiceRoller';
import LettersNumbers from './components/LettersNumbers';

const App = () => {
  return (
    <div>
      <LettersNumbers />
      <DiceRoller />
    </div>
  );
};

export default App;
