import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StudiedWordInSpans } from './WordInSpans';
import '../baseGame.scss';

export const Task = ({
  sentence,
  getInputValue,
  getStudiedWord,
  userMistakes,
  currentCard,
  lastStudiedCard,
  shouldShowInput,
  inputValue,
  shouldShowStudiedWord,
  // isCorrect,
  // сardNumber,
}) => {
  const [wordWithoutTags, setWordWithoutTags] = useState('');
  const [arrayFromSentence, setArrayFromSentence] = useState([]);
  const [shouldShowWordOnFocus, setshouldShowWordOnFocus] = useState(true);

  useEffect(() => {
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
    setArrayFromSentence(array);
    let withoutTags = studiedWord.replace('<b>', '').replace('</b>', '');
    setWordWithoutTags(withoutTags);
    if (punctuationMarks.includes(withoutTags.slice(-1))) {
      withoutTags = withoutTags.slice(0, -1);
      setWordWithoutTags(withoutTags);
    }
  }, [sentence]);

  const wordContainerClass = classNames({
    word__container: true,
    hidden__container: !shouldShowInput,
  });

  const studiedWordClass = classNames({
    'studied-word__container': true,
    hidden: shouldShowStudiedWord === false || !shouldShowWordOnFocus,
  });
  const wordToShow = classNames({
    'studied-word-to-show': true,
    hidden: shouldShowInput,
  });
  const onInputFocus = () => {
    if (userMistakes.length > 0) setshouldShowWordOnFocus(false);
  };

  return arrayFromSentence.map(word => {
    return word.includes('<') ? (
      <span className={wordContainerClass}>
        <span className={wordToShow}>
          <StudiedWordInSpans
            word={wordWithoutTags}
            userMistakes={[]}
            currentCard={currentCard}
            lastStudiedCard={lastStudiedCard}
          />
        </span>
        <span key={word.id} className="input__container">
          <span className={studiedWordClass}>
            <StudiedWordInSpans
              word={wordWithoutTags}
              userMistakes={userMistakes}
              currentCard={currentCard}
              lastStudiedCard={lastStudiedCard}
            />
          </span>
          {shouldShowInput ? (
            <input
              onFocus={onInputFocus}
              // autoFocus
              key={word}
              className="input-base-game"
              dataword={wordWithoutTags}
              value={inputValue}
              onChange={e => {
                getInputValue(e.target.value);
                getStudiedWord(wordWithoutTags);
              }}
            />
          ) : null}
        </span>
      </span>
    ) : (
      <span className="word">{word}</span>
    );
  });
};

Task.propTypes = {
  sentence: PropTypes.string,
  getInputValue: PropTypes.func,
  getStudiedWord: PropTypes.func,
};
