import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Game from './components/Game/Game';

function App() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
      <Header currentLevel={currentLevel} score={score} />
      <Question />
      <Game currentLevel={currentLevel} />
      <input className={`next ${true ? '' : ' able'}`} type="button" value="Следующий уровень" disabled={true} />
    </div>
  );
}

export default App;
