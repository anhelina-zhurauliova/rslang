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
  inputValue,
  shouldShowStudiedWord,
  settings,
  isCorrectAnswer,
}) => {
  const sentenceMeaning = words[сardNumber].textMeaning;
  const sentenceMeaningArray = sentenceMeaning.split(' ');
  let studiedWord;
  let studiedWordIndex;
  sentenceMeaningArray.forEach((el, i) => {
    if (el.includes('<')) {
      studiedWordIndex = i;
      studiedWord = el;
    }
  });

  const withoutTags = studiedWord.replace('<i>', '').replace('</i>', '');

  const starsWord = [];
  for (let i = 0; i < withoutTags.length; i += 1) {
    starsWord.push('*');
  }

  const ifNotAnswered = sentenceMeaningArray.map((el, i) => {
    if (i === studiedWordIndex) {
      el = starsWord.join('');
    }
    return el;
  });

  const ifAnswered = sentenceMeaningArray.map((el, i) => {
    if (i === studiedWordIndex) {
      el = withoutTags;
    }
    return el;
  });

  return words[сardNumber] ? (
    <div className="card__container">
      {settings.isImage ? (
        <div className="card-image__container">
          (
          <img
            className="card__image"
            src={`https://raw.githubusercontent.com/irinainina/rslang-data/master/${words[сardNumber].image}`}
            alt=""
          />
          )
        </div>
      ) : null}
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
              inputValue={inputValue}
              shouldShowStudiedWord={shouldShowStudiedWord}
              isCorrect={isCorrectAnswer === true}
              сardNumber={сardNumber}
            />
          </div>
          {isCorrectAnswer ? (
            <p className="card-info sentense-meaning">{words[сardNumber].textExampleTranslate}</p>
          ) : null}
          {settings.isWordMeaning ? (
            <p className="card-info sentense-meaning">
              {isCorrectAnswer ? ifAnswered.join(' ') : ifNotAnswered.join(' ')}
            </p>
          ) : null}
          {settings.isWordMeaning && isCorrectAnswer ? (
            <p className="card-info sentense-meaning">{words[сardNumber].textMeaningTranslate}</p>
          ) : null}
          {settings.isTranscription ? (
            <p className="card-info transcription">{words[сardNumber].transcription}</p>
          ) : null}
          {settings.isTranslation && isCorrectAnswer ? (
            <div className="translation__container">
              <div className="separator" />
              <p className="card-info translation">{words[сardNumber].wordTranslate}</p>
            </div>
          ) : null}
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
      textMeaningTranslate: PropTypes.string,
      textExampleTranslate: PropTypes.string,
    }),
  ),
  getInputValue: PropTypes.func,
  getStudiedWord: PropTypes.func,
  currentCard: PropTypes.number,
  lastStudiedCard: PropTypes.number,
  shouldShowInput: PropTypes.bool,
  shouldShowStudiedWord: PropTypes.bool,
  inputValue: PropTypes.string,
  isCorrectAnswer: PropTypes.bool,
  settings: PropTypes.objectOf(
    PropTypes.shape({
      isImage: PropTypes.bool,
    }),
  ),
};
