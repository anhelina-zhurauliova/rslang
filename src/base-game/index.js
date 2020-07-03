import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import SimpleSwiperWithParams from './components/swiper';
import './baseGame.scss';

export const BaseGame = () => {
  const [words, setWords] = useState([]);
  const [cookies] = useCookies(['authState']);

  const fetchWords = async (page, group, wordsAmount) => {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}&wordsPerPage=${wordsAmount}`,
    );
    const content = await rawResponse.json();
    return content;
  };
  const getWords = async () => {
    const wordsNew = await fetchWords(0, 0, 60);
    setWords(wordsNew);
  };
  useEffect(() => {
    if (!words.length) {
      getWords();
    }
  }, [words.length]);
  const { token, userId } = cookies.authState.user;

  const createUserWord = async ({ idUser, wordId, word }) => {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/users/${idUser}/words/${wordId}`,
      {
        method: 'POST',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(word),
      },
    );
    // eslint-disable-next-line no-unused-vars
    const content = await rawResponse.json();
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
        <SimpleSwiperWithParams
          words={words}
          token={token}
          userId={userId}
          createUserWord={createUserWord}
        />
      </div>
    </div>
  );
};
