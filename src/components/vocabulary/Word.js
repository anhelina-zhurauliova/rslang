import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import { ReactComponent as Megaphone } from '../../assets/svg/megaphone.svg';
import CONSTANTS from '../../shared/constants';

export const Word = props => {
  const { id, audio, word, translation, example } = props;

  const playWord = link => {
    const voice = new Audio(`${CONSTANTS.URL.FILES}/${link}`);
    voice.play();
  };
  return (
    <li key={id} className="vocabulary__item word list-group-item d-flex align-items-center">
      <button
        className="btn word__btn"
        type="button"
        onClick={() => {
          playWord(audio);
        }}
      >
        <Megaphone className="word__icon" />
      </button>
      <div className="word__wrapper">
        <h5 className="word__word text-primary mb-0">{word}</h5>
        <p className="word__translation">{translation}</p>
        <p className="word__example mb-o">{ReactHtmlParser(example)}</p>
        <p className="word__stats text-secondary mb-0">Давность: 11 часов назад | Повторений: 6</p>
      </div>
    </li>
  );
};

Word.propTypes = {
  id: PropTypes.string,
  audio: PropTypes.string,
  word: PropTypes.string,
  translation: PropTypes.string,
  example: PropTypes.string,
};
