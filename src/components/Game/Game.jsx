import React from 'react';
import './Game.scss';
import Answers from '../Answers/Answers';
import Bird from '../Bird/Bird';

class Game extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentBird: null,
    };
    this.currentBirdHandler = this.currentBirdHandler.bind(this);
  }

  currentBirdHandler(birdNumber) {
    this.setState({ currentBird: birdNumber });
  }

  nextLevelHandler() {
    const { levelHandler, currentLevel, correctAnswerHandler } = this.props;
    levelHandler(currentLevel + 1);
    correctAnswerHandler(false);
    this.setState({
      currentBird: null,
    });
  }

  render() {
    const {
      currentLevel,
      levelHandler,
      scoreHandler,
      correctAnswerHandler,
      answers,
      next,
      score,
    } = this.props;
    const { currentBird } = this.state;
    return (
      <>
        <div className="game">
          <Answers
            currentLevel={currentLevel}
            levelHandler={levelHandler}
            currentBirdHandler={this.currentBirdHandler}
            correctAnswerHandler={correctAnswerHandler}
            scoreHandler={scoreHandler}
            answers={answers}
            next={next}
            score={score}
          />
          <Bird
            currentLevel={currentLevel}
            currentBird={currentBird}
          />
        </div>
        <input
          className={`next ${next ? ' able' : ''}`}
          type="button"
          value="Следующий уровень"
          disabled={!next}
          onClick={() => this.nextLevelHandler()}
        />
      </>
    );
  }
}

export default Game;
