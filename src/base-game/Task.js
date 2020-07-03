import React from 'react';
import PropTypes from 'prop-types';
import { StudiedWordInSpans } from './Input';
import './baseGame.scss';

export const Task = ({ sentence }) => {
  const array = sentence.split(' ');
  const punctuationMarks = ['!', '.', '?'];
  let studiedWord;
  if (array[array.length - 1].includes('<')) {
    array.push(array[array.length - 1].slice(-1));
  }
  array.forEach(el => {
    if (el.includes('<')) {
      studiedWord = el;
    }
  });
  let withoutTags = studiedWord.replace('<b>', '').replace('</b>', '');
  if (punctuationMarks.includes(withoutTags.slice(-1))) {
    withoutTags = withoutTags.slice(0, -1);
  }
  return array.map(word => {
    return word.includes('<') ? (
      <span className="input__container">
        <span className="studied-word__container">
          <StudiedWordInSpans word={withoutTags} />
        </span>
        <input className="input-base-game" data-Word={withoutTags} />
      </span>
    ) : (
      <span className="word">{word}</span>
    );
  });
};

Task.propTypes = {
  sentence: PropTypes.string,
};
