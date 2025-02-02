import React from 'react';
import './Answers.scss';

import birdsData from '../../utils/birds';
import errorSound from './audio/error.mp3';
import correctSound from './audio/correct.mp3';

const className = require('classnames');

class Answers extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      levelScore: 5,
    };
  }

  choiseHandler(index, event) {
    const {
      answers,
      correctAnswerHandler,
      scoreHandler,
      currentLevel,
      currentBirdHandler,
      next,
      score,
    } = this.props;
    const { levelScore } = this.state;
    const isCorrect = index === answers[currentLevel];
    const point = event.target.children[0];

    if (!next) {
      if (!isCorrect && !point.className.includes('wrong')) {
        document.getElementById('error').play();
        this.setState((prevState) => ({
          levelScore: prevState.levelScore - 1,
        }));
      }
      const liClasses = className('li-button', { correct: isCorrect }, { wrong: !isCorrect });
      point.className = liClasses;
    }
    if (isCorrect) {
      if (!next) {
        scoreHandler(score + levelScore);
        this.setState({ levelScore: 5 });
        document.getElementById('correct').play();
      }
      document.getElementsByTagName('audio')[0].pause();
      correctAnswerHandler(isCorrect);
    }
    currentBirdHandler(event.target.dataset.birdNumber);
  }

  render() {
    const { currentLevel, answers } = this.props;
    if (!answers) {
      return <div />;
    }
    return (
      <div className="answers">
        <ul className="birds-list">
          {birdsData[currentLevel].map((el, i) => (
            <li
              role="button"
              key={el.name}
              data-bird-number={i}
              onClick={(event) => this.choiseHandler(i, event)}
            >
              <span className="li-button" />
              {el.name}
            </li>
          ))}
        </ul>
        <audio id="correct" src={correctSound} />
        <audio id="error" src={errorSound} />
      </div>
    );
  }
}

export default Answers;
