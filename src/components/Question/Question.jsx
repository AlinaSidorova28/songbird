import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './Question.scss';

import birdsData from '../../utils/birds';
import birdImage from './img/bird.jpg';

class Question extends React.PureComponent {
  render() {
    return (
      <div className="question">
        <img src={birdImage} alt="default bird" />
        <div className="question-content">
          <span>******</span>
          <AudioPlayer
            src={birdsData[0][0].audio}
            showJumpControls={false}
            customAdditionalControls={[]}
            layout="horizontal-reverse"
          />
        </div>
      </div>
    );
  }
}

export default Question;
