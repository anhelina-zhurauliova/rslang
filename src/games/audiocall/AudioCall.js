import React, { useState, useEffect } from 'react';
import { Game } from './Game';
import { CONSTANTS } from '../../shared/constants';
import './audiocall.scss';

export const AudioCall = () => {
  const [screen, setScreen] = useState({ isStarted: false });
  const [words, setWords] = useState([]);

  const fetchWords = async (page, group) => {
    const rawResponse = await fetch(`${CONSTANTS.URL.API}/words?page=${page}&group=${group}`);
    const content = await rawResponse.json();
    return content;
  };

  const getWords = async () => {
    const wordsNew = await fetchWords(0, 0);
    return wordsNew;
  };

  useEffect(() => {
    if (!words.length) {
      getWords().then(array => setWords(array));
    }
  }, [words.length]);

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
  return <Game globalWords={words} />;
};
