import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { WordInfo } from './WordInfo';
import { WordsList } from './WordsList';

export const Controllers = props => {
  const { allWords } = props;
  const [view] = useState({ isAnswered: false });

  const getCurrent = () => allWords.filter(x => x.answer === true);
  /* eslint-disable no-underscore-dangle  */
  return (
    <div className="audiocall__content col-md-10 container flex-column">
      <WordInfo answered={view.isAnswered} word={getCurrent()} />
      <ol className="audiocall__list row">
        {allWords.map(word => (
          <WordsList key={word._id} word={word} />
        ))}
      </ol>
      <button className="audiocall__btn btn" type="button">
        не знаю
      </button>
    </div>
  );
};

Controllers.propTypes = {
  allWords: PropTypes.array,
};
