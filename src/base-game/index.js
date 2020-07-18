import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { onError } from '../libs/errorLib';
import 'react-toastify/dist/ReactToastify.css';
import SimpleSwiperWithParams from './components/swiper';
import './baseGame.scss';

export const BaseGame = () => {
  const [words, setWords] = useState([]);
  const [cookies] = useCookies(['authState']);
  const [shouldTurnOnSound, setShouldTurnOnSound] = useState(false);
  const [settings, setSettings] = useState();
  // console.log(shouldTurnOnSound);

  const fetchWords = async (group, wordsAmount) => {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/words?&group=${group}&page=&wordsPerPage=${wordsAmount}`,
    );
    const content = await rawResponse.json();
    return content;
  };

  const getWords = async () => {
    const wordsNew = await fetchWords(0, settings.wordsPerPages);
    setWords(wordsNew);
  };

  useEffect(() => {
    if (!words.length) {
      getWords();
    }
  }, [getWords, words.length]);

  const basicSettings = JSON.parse(localStorage.getItem('basicGame'));

  useEffect(() => {
    if (settings === undefined) {
      setSettings(basicSettings);
    }
  }, [settings]);

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
  const handleSwitchButtonClick = () => {
    return shouldTurnOnSound === false ? setShouldTurnOnSound(true) : setShouldTurnOnSound(false);
  };
  const getUserSettings = async (tokenUser, idUser) => {
    try {
      const url = `https://afternoon-falls-25894.herokuapp.com/users/${idUser}/settings`;
      const rawResponse = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${tokenUser}`,
          Accept: 'application/json',
        },
      });
      const dataUser = await rawResponse.json();
      return dataUser;
    } catch (error) {
      return onError(error.message);
    }
  };
  getUserSettings(token, userId);
  return (
    <div className="wrapper">
      <div className="card__container">
        <div className="button-switch">
          <p className="button-switch__text">Автовоспроизведение аудио</p>
          <label className="switch">
            <input type="checkbox" onClick={handleSwitchButtonClick} />
            <span className="slider round" />
          </label>
        </div>
        <SimpleSwiperWithParams
          words={words}
          token={token}
          userId={userId}
          createUserWord={createUserWord}
          shouldTurnOnSound={shouldTurnOnSound}
        />
      </div>
    </div>
  );
};
