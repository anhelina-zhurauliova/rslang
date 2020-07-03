import React from 'react';

export const StartScreen = () => {
  return (
    <div className="audiocall__start-container col-lg-8 col-md-10 container d-flex justify-content-center align-items-center flex-column">
      <h1 className="start-header">аудиовызов</h1>
      <p className="start-text">Улучшает восприятие английской речи на слух</p>
      <button className="btn-next btn" type="button">
        Начать
      </button>
    </div>
  );
};
