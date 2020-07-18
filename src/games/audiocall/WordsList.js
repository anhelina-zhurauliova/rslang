import React from 'react';
import PropTypes from 'prop-types';

export const WordsList = props => {
  const { word, onGameItemClick } = props;

  if (word.false) {
    return (
      <li key={word._id} className="audiocall__list-item-false word">
        <button type="button" className="word__btn-false btn">
          {word.wordTranslate}
        </button>
      </li>
    );
  }

  if (word.right) {
    return (
      <li key={word._id} className="audiocall__list-item-answer word">
        <button type="button" className="word__btn-answer btn">
          {word.wordTranslate}
        </button>
      </li>
    );
  }
  if (word.neutral) {
    return (
      <li key={word._id} className="audiocall__list-item word">
        <button type="button" className="word__btn-neutral btn">
          {word.wordTranslate}
        </button>
      </li>
    );
  }

  return (
    <li key={word._id} className="audiocall__list-item word">
      <button type="button" className="word__btn btn" onClick={e => onGameItemClick(e)}>
        {word.wordTranslate}
      </button>
    </li>
  );
};

WordsList.propTypes = {
  word: PropTypes.object,
  onGameItemClick: PropTypes.func,
};
