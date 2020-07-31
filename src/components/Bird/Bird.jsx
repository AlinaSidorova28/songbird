import React from 'react';
import './Bird.scss';

class Bird extends React.PureComponent {
  render() {
    return (
      <div className="bird">
        Послушайте плеер.
        <br />
        Выберите птицу из списка
      </div>
    );
  }
}

export default Bird;
