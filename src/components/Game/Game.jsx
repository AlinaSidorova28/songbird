import React from 'react';
import './Game.scss';
import Answers from '../Answers/Answers';
import Bird from '../Bird/Bird';

class Game extends React.PureComponent {
  render() {
    const { currentLevel } = this.props;
    return (
      <div className="game">
        <Answers currentLevel={currentLevel} />
        <Bird />
      </div>
    );
  }
}

export default Game;
