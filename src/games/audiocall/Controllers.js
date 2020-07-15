import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { WordInfo } from './WordInfo';
import { WordsList } from './WordsList';

export const Controllers = props => {
  const { allWords, nextWord } = props;
  const [view, setView] = useState({ isAnswered: false });
  const [word, setWord] = useState(null);

  const getCurrent = () => allWords.filter(x => x.answer === true);
  const getClicked = text => allWords.filter(x => text === x.wordTranslate)[0];

  const onGameItemClick = e => {
    e.preventDefault();
    const clicked = getClicked(e.target.innerText);
    const clickedIndex = allWords.indexOf(clicked);
    const currentIndex = allWords.indexOf(word[0]);
    setView({ isAnswered: true });
    if (currentIndex === clickedIndex) {
      allWords.forEach(w => {
        if (w === word[0]) {
          w.right = true;
        } else {
          w.neutral = true;
        }
      });
    } else {
      allWords.forEach(w => {
        if (w === clicked) {
          w.false = true;
        } else if (w === word[0]) {
          w.right = true;
        } else {
          w.neutral = true;
        }
      });
    }
  };

  const dontKnow = e => {
    e.preventDefault();
    setView({ isAnswered: true });
  };

  useEffect(() => {
    if (allWords.length > 0) setWord(getCurrent());
  }, [JSON.stringify(allWords)]);

  if (!word) {
    return <h1>Loading</h1>;
  }

  if (!view.isAnswered) {
    return (
      <div className="audiocall__content col-md-10 container flex-column">
        <WordInfo answered={view.isAnswered} word={word} />
        <ol className="audiocall__list row">
          {allWords.map(w => (
            <WordsList key={w._id} word={w} onGameItemClick={onGameItemClick} />
          ))}
        </ol>
        <button className="audiocall__btn btn" type="button" onClick={dontKnow}>
          не знаю
        </button>
      </div>
    );
  }

  return (
    <div className="audiocall__content col-md-10 container flex-column">
      <WordInfo answered={view.isAnswered} word={word} />
      <ol className="audiocall__list row">
        {allWords.map(w => (
          <WordsList key={w._id} word={w} onGameItemClick={onGameItemClick} />
        ))}
      </ol>
      <button
        className="audiocall__btn btn"
        type="button"
        onClick={() => {
          setView({ isAnswered: false });
          nextWord();
          // setView({ currentWord: getCurrent() });
        }}
      >
        дальше
      </button>
    </div>
  );
};

Controllers.propTypes = {
  allWords: PropTypes.array,
  nextWord: PropTypes.func,
};
