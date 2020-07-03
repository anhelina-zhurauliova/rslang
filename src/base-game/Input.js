import React from 'react';
import PropTypes from 'prop-types';

export const StudiedWordInSpans = ({ word }) => {
  const arr = word.split('');
  return arr.map(letter => <span className="letter">{letter}</span>);
};

StudiedWordInSpans.propTypes = {
  word: PropTypes.string,
};
