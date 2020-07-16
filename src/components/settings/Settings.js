/* eslint-disable no-return-assign */
/* eslint-disable no-console */
// eslint-disable-next-line no-return-assign

import React, { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import './settings.scss';
import { onError } from '../../libs/errorLib';
import 'react-toastify/dist/ReactToastify.css';

export const Settings = () => {
  const defaultSettings = {
    optional: {
      basicGame: {
        isImage: true,
        isTranslation: true,
        isTranscription: true,
        isSentenceExample: true,
        isTranslateSentenceExample: true,
        isWordMeaning: true,
        isTranslateWordmeaning: true,
        showAnswer: true,
        deleteButton: true,
        hardWordButton: true,
        cardsForDay: '50',
      },
    },
    wordsPerDay: '50',
  };
  const [currentSettings, setCurrentSettings] = useState();
  const [settingsFromBack, setSettingsFromBack] = useState({});
  const [cookies] = useCookies(['authState']);
  const [numberOfWords, setNumberOfWords] = useState(null);
  const cardLimit = useRef();
  const wordLimit = useRef();

  const { token, userId } = cookies.authState.user;

  const upsertUserSettings = (tokenUser, idUser, settings) => {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${idUser}/settings`;

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(settings),
      headers: {
        Authorization: `Bearer ${tokenUser}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };

  const fetchUserSettings = async (tokenUser, idUser) => {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${idUser}/settings`;
    try {
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
  const getSettings = async () => {
    const settings = await fetchUserSettings(token, userId);

    if (settings?.optional?.basicGame) {
      setCurrentSettings(settings);
      setNumberOfWords(settings.wordsPerDay);
      setSettingsFromBack(settings.optional.basicGame);
    } else {
      setSettingsFromBack(defaultSettings);
      setCurrentSettings(defaultSettings.optional.basicGame);
      setNumberOfWords(defaultSettings.wordsPerDay);
    }
  };

  useEffect(() => {
    if (userId) {
      getSettings();
    }
  }, [userId]);

  const onSubmithandler = e => {
    e.preventDefault();
    upsertUserSettings(token, userId, {
      wordsPerDay: '1',
      optional: {
        ...settingsFromBack.optional,
        basicGame: currentSettings,
      },
    });
  };

  return currentSettings ? (
    <form>
      <div className="settings__container">
        <h2 className="page__title">Параметры страницы</h2>

        <div className="settings_learned__words">
          <h3 className="settings__secondary-title">Настройки изучаемых слов:</h3>
          <div className="words__limit">
            <p className="settings__info">1. Количество новых слов в день:</p>
            <button
              className="form__button"
              type="button"
              onClick={() => {
                const numWordLimit = Number(wordLimit.current.value);
                if (numWordLimit > 10) {
                  return (wordLimit.current.value = numWordLimit - 1);
                }
                return (wordLimit.current.value = numWordLimit);
              }}
            >
              -
            </button>
            <input
              ref={wordLimit}
              className="plus-minus__input"
              value={numberOfWords}
              type="number"
              min={10}
              max={200}
            />
            <button
              className="form__button"
              type="button"
              onClick={() => {
                const numWordLimit = Number(wordLimit.current.value);
                if (numWordLimit > 10) {
                  return (wordLimit.current.value = numWordLimit + 1);
                }
                return (wordLimit.current.value = numWordLimit);
              }}
            >
              +
            </button>
          </div>
          <div className="cards__limit">
            <p className="settings__info">2. Максимальное количество карточек в день:</p>
            <button
              className="form__button"
              type="button"
              onClick={() => {
                const num = Number(cardLimit.current.value);
                if (num > 10) {
                  cardLimit.current.value = num - 1;
                } else {
                  cardLimit.current.value = num;
                }
                setCurrentSettings(prevSettings => ({
                  ...prevSettings,
                  cardsForDay: cardLimit.current.value,
                }));
              }}
            >
              -
            </button>
            <input
              ref={cardLimit}
              className="plus-minus__input"
              value={currentSettings.cardsForDay}
              type="number"
              min={10}
              max={200}
            />
            <button
              className="form__button"
              type="button"
              onClick={() => {
                const numCardLimit = Number(cardLimit.current.value);
                if (numCardLimit < 200) {
                  cardLimit.current.value = numCardLimit + 1;
                }
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="settings_info_cards">
          <h3 className="settings__secondary-title">Отображение информации на карточках:</h3>
          <div className="settings__info__container">
            <div className="info__card">
              <input
                className="settings__checkbox"
                type="checkbox"
                checked={currentSettings.isTranslation}
              />
              <p className="settings__info">Показывать перевод слова</p>
            </div>
            <div className="info__card">
              <input
                className="settings__checkbox"
                type="checkbox"
                checked={currentSettings.isWordMeaning}
              />
              <p className="settings__info">Показывать предложение с объяснением значения слова</p>
            </div>
            <div className="info__card">
              <input
                className="settings__checkbox"
                type="checkbox"
                checked={currentSettings.isWordMeaning}
              />
              <p className="settings__info">
                Показывать перевод предложения с объяснением значения слова
              </p>
            </div>
            <div className="info__card">
              <input
                className="settings__checkbox"
                type="checkbox"
                checked={currentSettings.isSentenceExample}
              />
              <p className="settings__info">
                Показывать предложение с примером использования слова
              </p>
            </div>
            <div className="info__card">
              <input
                className="settings__checkbox"
                type="checkbox"
                checked={currentSettings.isTranslateSentenceExample}
              />
              <p className="settings__info">
                Показывать перевод предложения с примером использования слова
              </p>
            </div>
            <div className="info__card">
              <input
                className="settings__checkbox"
                type="checkbox"
                checked={currentSettings.isTranscription}
              />
              <p className="settings__info">Показывать транскрипцию слова</p>
            </div>
            <div className="info__card">
              <input
                className="settings__checkbox"
                type="checkbox"
                checked={currentSettings.isImage}
              />
              <p className="settings__info">Показывать картинку-ассоциацию к слову</p>
            </div>
          </div>
        </div>

        <div className="settings__button-on-page">
          <h3 className="settings__secondary-title">Отображение кнопок на странице:</h3>
          <div className="settings__info__container">
            <div className="info__card">
              <input className="settings__checkbox" type="checkbox" />
              <p className="settings__info">Добавить кнопку </p>
              <span className="button__imitation">Показать ответ</span>
            </div>
            <div className="info__card">
              <input className="settings__checkbox" type="checkbox" />
              <p className="settings__info">Добавить кнопку </p>
              <span className="button__imitation">Удалить</span>
            </div>
            <div className="info__card">
              <input className="settings__checkbox" type="checkbox" />
              <p className="settings__info">Добавить кнопку </p>
              <span className="button__imitation">Сложное слово</span>
            </div>
          </div>
        </div>
      </div>
      <button className="submit__settings_button" type="submit" onClick={onSubmithandler}>
        Сохранить
      </button>
    </form>
  ) : (
    <h1>LOAD</h1>
  );
};
