import React from 'react';
import './Answers.scss';

import birdsData from '../../utils/birds';

class Answers extends React.PureComponent {
  render() {
    const { currentLevel } = this.props;
    return (
      <div className="answers">
        <ul className="birds-list">
          {birdsData[currentLevel].map((el) => (
            <li key={el.name}>
              <span className="li-button" />
              {el.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Answers;
