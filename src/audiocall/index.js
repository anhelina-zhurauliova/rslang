/* eslint-disable max-len */
import React, { useState } from 'react';
import { Game } from './Game';
import './audiocall.scss';

export const AudioCall = () => {
  // eslint-disable-next-line no-unused-vars
  const [screen, setScreen] = useState();
  return (
    <div className="audiocall container d-flex justify-content-center">
      <div className="audiocall__start-container col-lg-8 col-md-10 container d-flex justify-content-center align-items-center flex-column">
        <h1 className="start-header">аудиовызов</h1>
        <p className="start-text">Улучшает восприятие английской речи на слух</p>
        <button className="btn-next btn" type="button" onClick={setScreen(<Game />)}>
          Начать
        </button>
      </div>
    </div>
  );
};
