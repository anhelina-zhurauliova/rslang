/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import '../baseGame.scss';

export const StudiedWordInSpans = ({ word, userMistakes }) => {
  const arr = word.split('');

  return arr.map((letter, i) => {
    if (userMistakes.length > 0) {
      if (userMistakes.includes(i)) {
        // console.log(111);
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
