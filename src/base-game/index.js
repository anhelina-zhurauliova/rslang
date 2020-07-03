/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useEffect } from 'react';
import SimpleSwiperWithParams from './swiper';
import './baseGame.scss';

export const BaseGame = () => {
  const [words, setWords] = useState([]);
  const [swiper] = useState(null);

  const fetchWords = async (page, group) => {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`,
    );
    const content = await rawResponse.json();
    return content;
  };
  const getWords = async () => {
    const wordsNew = await fetchWords(0, 0);
    setWords(wordsNew);
  };
  useEffect(() => {
    if (!words.length) {
      getWords();
    }
  }, [words.length]);
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  return (
    <div className="wrapper">
      <div className="card__container">
        <div className="button-switch">
          <p className="button-switch__text">Автовоспроизведение аудио</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
        </div>
        <SimpleSwiperWithParams words={words} />
      </div>
      <div className="buttons_control__container">
        <button className="button" type="button">
          Удалить
        </button>
        <button className="button" type="button">
          Сложное слово
        </button>
        <button className="button" type="submit" onClick={goNext}>
          Дальше
        </button>
        <button className="button" type="submit">
          Показать ответ
        </button>
      </div>
    </div>
  );
};
