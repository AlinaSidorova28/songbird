import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './Question.scss';

import birdsData from '../../utils/birds';
import birdImage from './img/bird.jpg';

class Question extends React.PureComponent {
  render() {
    const { currentLevel, answers, next } = this.props;
    if (!answers) {
      return <div />;
    }
    return (
      <div className="question">
        <img src={next ? birdsData[currentLevel][answers[currentLevel]].image : birdImage} alt="default bird" />
        <div className="question-content">
          <span>******</span>
          <AudioPlayer
            src={birdsData[currentLevel][answers[currentLevel]].audio}
            showJumpControls={false}
            autoPlayAfterSrcChange={false}
            defaultDuration="00:00"
            customAdditionalControls={[]}
            layout="horizontal-reverse"
          />
        </div>
      </div>
    );
  }
}

export default Question;
