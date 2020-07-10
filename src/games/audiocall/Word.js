import React from 'react';
import PropTypes from 'prop-types';

export const Word = props => {
  const { word } = props;
  return (
    <li key={word.id} className="audiocall__list-item word">
      <button type="button" className="word__btn btn">
        {word.wordTranslate}
      </button>
    </li>
  );
};

Word.propTypes = {
  word: PropTypes.object,
};
