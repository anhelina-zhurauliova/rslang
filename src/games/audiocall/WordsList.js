import React from 'react';
import PropTypes from 'prop-types';

export const WordsList = props => {
  const { word } = props;
  /* eslint-disable no-underscore-dangle  */
  return (
    <li key={word._id} className="audiocall__list-item word">
      <button type="button" className="word__btn btn">
        {word.wordTranslate}
      </button>
    </li>
  );
};

WordsList.propTypes = {
  word: PropTypes.object,
};
