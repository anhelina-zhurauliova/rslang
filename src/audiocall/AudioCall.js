/* eslint-disable max-len */
import React, { useState } from 'react';
import { Game } from './Game';
import './audiocall.scss';

export const AudioCall = () => {
  const [screen, setScreen] = useState({ isStarted: false });

  if (!screen.isStarted) {
    return (
      <div className="audiocall container d-flex justify-content-center">
        <div className="audiocall__content col-lg-8 col-md-10 container flex-column">
          <h1 className="audiocall__header">аудиовызов</h1>
          <p className="audiocall__text">Улучшает восприятие английской речи на слух</p>
          <button
            className="audiocall__btn btn"
            type="button"
            onClick={() => setScreen({ isStarted: true })}
          >
            Начать
          </button>
        </div>
      </div>
    );
  }
  return <Game />;
};
