import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './Bird.scss';

import birdsData from '../../utils/birds';

class Bird extends React.PureComponent {
  render() {
    const { currentLevel, currentBird } = this.props;
    let content;
    const bird = birdsData[currentLevel][currentBird];
    if (currentBird) {
      content = (
        <>
          <div className="bird-container">
            <img src={bird.image} alt={bird.name} />
            <span>
              <h2>{bird.name}</h2>
              <p>{bird.species}</p>
              <AudioPlayer
                src={bird.audio}
                showJumpControls={false}
                autoPlayAfterSrcChange={false}
                defaultCurrentTime="00:00"
                defaultDuration="00:00"
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
            </span>
          </div>
          <p>{bird.description}</p>
        </>
      );
    } else {
      content = (
        <>
          Послушайте плеер.
          <br />
          Выберите птицу из списка
        </>
      );
    }
    return (
      <div className="bird">
        {content}
      </div>
    );
  }
}

export default Bird;
