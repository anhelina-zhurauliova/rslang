/* eslint-disable no-return-assign */
/* eslint-disable no-console */
// eslint-disable-next-line no-return-assign

import React, { useRef } from 'react';
// import { useCookies } from 'react-cookie';
import './settings.scss';
// import { onError } from '../../libs/errorLib';
import 'react-toastify/dist/ReactToastify.css';

export const Settings = () => {
  const basicGameSettings = {
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
    wordsPerDay: 50,
    cardsPerDay: 50,
  };
  const setToLocalStorage = () => {
    localStorage.setItem('basicGame', JSON.stringify(basicGameSettings));
  };
  if (!localStorage.getItem('basicGame')) setToLocalStorage();

  const gottenBasicSettings = JSON.parse(localStorage.getItem('basicGame'));

  const cardLimit = useRef();
  const wordLimit = useRef();

  return (
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
              value={gottenBasicSettings.wordsPerDay}
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
              }}
            >
              -
            </button>
            <input
              ref={cardLimit}
              className="plus-minus__input"
              value={gottenBasicSettings.cardsPerDay}
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
                checked={gottenBasicSettings.isTranslation}
              />
              <p className="settings__info">Показывать перевод слова</p>
            </div>
            <div className="info__card">
              <input
                className="settings__checkbox"
                type="checkbox"
                checked={gottenBasicSettings.isWordMeaning}
              />
              <p className="settings__info">Показывать предложение с объяснением значения слова</p>
            </div>
            <div className="info__card">
              <input
                className="settings__checkbox"
                type="checkbox"
                checked={gottenBasicSettings.isWordMeaning}
              />
              <p className="settings__info">
                Показывать перевод предложения с объяснением значения слова
              </p>
            </div>
            <div className="info__card">
              <input
                className="settings__checkbox"
                type="checkbox"
                checked={gottenBasicSettings.isSentenceExample}
              />
              <p className="settings__info">
                Показывать предложение с примером использования слова
              </p>
            </div>
            <div className="info__card">
              <input
                className="settings__checkbox"
                type="checkbox"
                checked={gottenBasicSettings.isTranslateSentenceExample}
              />
              <p className="settings__info">
                Показывать перевод предложения с примером использования слова
              </p>
            </div>
            <div className="info__card">
              <input
                className="settings__checkbox"
                type="checkbox"
                checked={gottenBasicSettings.isTranscription}
              />
              <p className="settings__info">Показывать транскрипцию слова</p>
            </div>
            <div className="info__card">
              <input
                className="settings__checkbox"
                type="checkbox"
                checked={gottenBasicSettings.isImage}
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
      <button className="submit__settings_button" type="submit">
        Сохранить
      </button>
    </form>
  );
};
