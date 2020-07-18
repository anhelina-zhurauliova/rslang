import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { SimpleSwiperWithParams } from './components/swiper';
import './baseGame.scss';

export const BaseGame = () => {
  const [words, setWords] = useState([]);
  const [cookies] = useCookies(['authState']);
  const [shouldTurnOnSound, setShouldTurnOnSound] = useState(false);
  const [settings, setSettings] = useState({});

  const fetchWords = async (group, wordsAmount) => {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/words?&group=${group}&page=&wordsPerExampleSentenceLTE=${wordsAmount}&wordsPerPage=${wordsAmount}`,
    );
    const content = await rawResponse.json();
    return content;
  };

  const getWords = async () => {
    if (settings) {
      const wordsNew = await fetchWords(settings.group, settings.wordsPerDay);
      setWords(wordsNew);
    }
  };

  const basicGameSettings = {
    isImage: true,
    isTranslation: true,
    isTranscription: true,
    isSentenceExample: true,
    isWordMeaning: true,
    showAnswer: true,
    deleteButton: true,
    hardWordButton: true,
    isShowAnswerButton: true,
    isHardButton: true,
    isDeleteButton: true,
    wordsPerDay: 50,
    cardsPerDay: 50,
    group: 0,
  };

  useEffect(() => {
    if (!words.length || settings.isImage) {
      if (!localStorage.getItem('basicGame')) {
        setSettings(basicGameSettings);
      } else {
        setSettings(JSON.parse(localStorage.getItem('basicGame')));
      }
      getWords();
    }
  }, [words.length, settings.isImage]);

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

  return (
    <div className="base__game_wrapper">
      <div className="base__game_card__container">
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
