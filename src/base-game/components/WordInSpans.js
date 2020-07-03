/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import '../baseGame.scss';

export const StudiedWordInSpans = ({ word, userMistakes, lastStudiedCard, currentCard }) => {
  const arr = word.split('');
  return arr.map((letter, i) => {
    if (userMistakes.length > 0 && lastStudiedCard === currentCard) {
      if (userMistakes.includes(i)) {
        return (
          <span key={i} className="letter red">
            {letter}
          </span>
        );
      }
      return (
        <span key={i} className="letter">
          {letter}
        </span>
      );
    }
    return (
      <span key={i} className="letter">
        {letter}
      </span>
    );
  });
};

StudiedWordInSpans.propTypes = {
  word: PropTypes.string,
};
