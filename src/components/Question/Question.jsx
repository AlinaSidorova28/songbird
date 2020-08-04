import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
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
          <span>{next ? birdsData[currentLevel][answers[currentLevel]].name : '******'}</span>
          <AudioPlayer
            src={birdsData[currentLevel][answers[currentLevel]].audio}
            showJumpControls={false}
            autoPlayAfterSrcChange={false}
            defaultCurrentTime="Loading..."
            defaultDuration="Loading..."
            customAdditionalControls={[]}
            customProgressBarSection={
              [
                RHAP_UI.PROGRESS_BAR,
              ]
            }
            customControlsSection={
              [
                RHAP_UI.CURRENT_TIME,
                RHAP_UI.MAIN_CONTROLS,
                RHAP_UI.VOLUME_CONTROLS,
                RHAP_UI.DURATION,
              ]
            }
          />
        </div>
      </div>
    );
  }
}

export default Question;
