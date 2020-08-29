import React from 'react';
import './Header.scss';

import sections from '../../utils/constants';
import logoImage from './img/logo.png';

class Header extends React.PureComponent {
  render() {
    const { currentLevel, score } = this.props;
    return (
      <div className="header">
        <div className="header-container">
          <div className="top-panel">
            <img className="logo" src={logoImage} alt="logo" />
            <span>{`Score: ${score}`}</span>
          </div>
          <ul className="sections">
            {sections.map((el, i) => <li key={el} className={i === currentLevel ? 'active' : ''}>{el}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
