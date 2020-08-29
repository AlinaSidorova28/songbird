/* eslint-disable class-methods-use-this */
import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Game from './components/Game/Game';
import Final from './components/Final/Final';
import setAnswers from './utils/setAnswers';

// import birdsData from './utils/birds';

// const answersArray = [];

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 0,
      score: 0,
      next: false,
    };
    this.scoreHandler = this.scoreHandler.bind(this);
    this.levelHandler = this.levelHandler.bind(this);
    this.correctAnswerHandler = this.correctAnswerHandler.bind(this);
    this.setAnswersHandler = this.setAnswersHandler.bind(this);
  }

  componentDidMount() {
    // this.setAnswers();
    // this.setState({ answers: answersArray });
    this.setState({ answers: setAnswers() });
  }

  // setAnswers() {
  //   answersArray.slice(0);
  //   for (let i = 0; i < 6; i += 1) {
  //     answersArray.push(Math.floor(Math.random() * 6));
  //   }
  //   this.showAnswers();
  //   this.setState({ answers: answersArray });
  // }

  setAnswersHandler(answers) {
    this.setState({ answers });
  }

  correctAnswerHandler(next) {
    this.setState({ next });
  }

  // showAnswers() {
  //   answersArray.map((el, i) => console.log(`Answer-${i + 1}: ${birdsData[i][el].name}`));
  // }

  scoreHandler(score) {
    this.setState({ score });
  }

  levelHandler(currentLevel) {
    this.setState({ currentLevel });
  }

  render() {
    const {
      currentLevel,
      score,
      answers,
      next,
    } = this.state;
    if (currentLevel < 6) {
      return (
        <div>
          <Header currentLevel={currentLevel} score={score} />
          <Question
            currentLevel={currentLevel}
            answers={answers}
            next={next}
          />
          <Game
            currentLevel={currentLevel}
            levelHandler={this.levelHandler}
            scoreHandler={this.scoreHandler}
            correctAnswerHandler={this.correctAnswerHandler}
            answers={answers}
            next={next}
            score={score}
          />
        </div>

      );
    }
    return (
      <div>
        <Header currentLevel={currentLevel} score={score} />
        <Final
          score={score}
          levelHandler={this.levelHandler}
          setAnswersHandler={this.setAnswersHandler}
          scoreHandler={this.scoreHandler}
        />
      </div>
    );
  }
}

export default App;
