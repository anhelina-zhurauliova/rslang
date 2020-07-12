import './savanna.css';
import React from 'react';

export function Savanna() {
  return (
    <main className="container">
      <div className="info">
        <h1 className="headline">
          R
          <img src="../../assets/svg/letterO.png" className="zzz" />
          CKET RESQUE
        </h1>
        <p className="description">
          Тренировка Саванна развивает словарный запас.
          <br />
          Чем больше слов ты знаешь, тем больше очков опыта получишь.
        </p>
        <button type="button" className="start">
          НАЧАТЬ
        </button>
        <div className="quick-answer">
          <i className="far fa-keyboard keyboard" />
          <p className="quick-answer">
            Используй клавиши 1,2,3 и 4,
            <br />
            чтобы дать быстрый ответ
          </p>
        </div>
      </div>
      <div className="game hidden">
        <div className="game__header">
          <button type="button" className="music-icon">
            <i className="fa fa-volume-up" aria-hidden="true" />
          </button>
          <div className="life-icon">
            <i className="fa fa-heart heart-icon life" aria-hidden="true" />
            <i className="fa fa-heart heart-icon life" aria-hidden="true" />
            <i className="fa fa-heart heart-icon life" aria-hidden="true" />
            <i className="fa fa-heart heart-icon life" aria-hidden="true" />
            <i className="fa fa-heart heart-icon life" aria-hidden="true" />
          </div>
        </div>
        <div className="game__content">
          <div className="stage">
            <div className="box bounce-1" />
          </div>
          <span className="various">
            <span className="number">1</span>
            <span className="options option-1" data-keycode="49" />
          </span>
          <span className="various">
            <span className="number">2</span>
            <span className="options option-2" data-keycode="50" />
          </span>
          <span className="various">
            <span className="number">3</span>
            <span className="options option-3" data-keycode="51" />
          </span>
          <span className="various">
            <span className="number">4</span>
            <span className="options option-4" data-keycode="52" />
          </span>
        </div>
        <div className="game__progress">
          <img className="game__progress__icon" src="picture/rocket.png" alt="" />
        </div>
      </div>
    </main>
  );
}
