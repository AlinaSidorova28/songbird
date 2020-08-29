import React from 'react';
import './Final.scss';
import setAnswers from '../../utils/setAnswers';

import winAudio from './audio/win.mp3';
import endingAudio from './audio/ending.mp3';
import eagleImage from './img/eagle.jpg';

class Final extends React.PureComponent {
  clickHandler() {
    const {
      levelHandler,
      scoreHandler,
      setAnswersHandler,
    } = this.props;
    levelHandler(0);
    scoreHandler(0);
    setAnswersHandler(setAnswers());
  }

  render() {
    const { score } = this.props;
    let content;
    if (score === 30) {
      content = (
        <>
          <p>
            Вы прошли викторину и набрали максимальное количество баллов!
            <br />
            Юные орнитологи вам обзавидуются :D
          </p>

          <audio src={winAudio} autoPlay />
          <img src={eagleImage} alt="eagle" />
          <h2>Конец игры!</h2>
        </>
      );
    } else {
      content = (
        <>
          <audio src={endingAudio} autoPlay />
          <p>{`Вы прошли викторину и набрали ${score} из 30 возможных баллов`}</p>
          <input
            className="again"
            type="button"
            value="Попробовать еще раз"
            onClick={() => this.clickHandler()}
          />
        </>
      );
    }
    return (
      <div className="final">
        <h1>Поздравляем!</h1>
        <div>{content}</div>
      </div>
    );
  }
}

export default Final;
