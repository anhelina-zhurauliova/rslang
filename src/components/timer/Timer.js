import './timer.scss';
import React from 'react';

export function Timer() {
  return (
    <div className="wrapper">
      <div className="timer">
        <div className="timer__line"></div>
        <div className="timer__body">
          <div className="timer__counter">
            <span>5</span>
            <span>4</span>
            <span>3</span>
            <span>2</span>
            <span>1</span>
            <span>GO!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
