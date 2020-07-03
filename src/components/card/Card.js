import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../base-game/components/Task';
import './card.scss';

export const Card = ({
  words,
  сardNumber,
  getInputValue,
  getStudiedWord,
  userMistakes,
  currentCard,
  lastStudiedCard,
  shouldShowInput,
}) => {
  return words[сardNumber] ? (
    <div className="card__container">
      <div className="card-image__container">
        <img
          className="card__image"
          src={`https://raw.githubusercontent.com/irinainina/rslang-data/master/${words[сardNumber].image}`}
          alt=""
        />
      </div>
      <div className="card">
        <div className="card-info__container">
          <div className="card-info">
            {' '}
            <Task
              sentence={words[сardNumber].textExample}
              getInputValue={getInputValue}
              getStudiedWord={getStudiedWord}
              userMistakes={userMistakes}
              currentCard={currentCard}
              lastStudiedCard={lastStudiedCard}
              shouldShowInput={shouldShowInput}
            />
          </div>
          <p className="card-info sentense-meaning">{words[сardNumber].textMeaning}</p>
          <p className="card-info transcription">{words[сardNumber].transcription}</p>
          <div className="translation__container">
            <div className="separator" />
            <p className="card-info translation">{words[сardNumber].wordTranslate}</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

Card.propTypes = {
  сardNumber: PropTypes.number,
  userMistakes: PropTypes.array,
  words: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      textMeaning: PropTypes.string,
      textExample: PropTypes.string,
      wordTranslate: PropTypes.string,
      transcription: PropTypes.string,
    }),
  ),
  getInputValue: PropTypes.func,
  getStudiedWord: PropTypes.func,
  currentCard: PropTypes.number,
  lastStudiedCard: PropTypes.number,
  shouldShowInput: PropTypes.bool,
};
