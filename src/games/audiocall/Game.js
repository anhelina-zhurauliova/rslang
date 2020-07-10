import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CONSTANTS } from '../../shared/constants';
import { ReactComponent as Megaphone } from '../../assets/svg/megaphone.svg';
import { Word } from './Word';

export const Game = props => {
  const { globalWords } = props;
  const [currentWords, setCurrentWords] = useState([]);
  // const example = [
  //   {
  //     id: 1,
  //     wordTranslate: 'some',
  //   },
  //   {
  //     id: 2,
  //     wordTranslate: 'people',
  //   },
  //   {
  //     id: 3,
  //     wordTranslate: 'person',
  //   },
  //   {
  //     id: 4,
  //     wordTranslate: 'human',
  //   },
  //   {
  //     id: 5,
  //     wordTranslate: 'earth',
  //   },
  // ];
  const getWordDetalization = async word => {
    const rawResponse = await fetch(`${CONSTANTS.URL.DETALIZATION}=${word}`);
    const wordInfo = await rawResponse.json();
    return wordInfo[0].meanings[0].partOfSpeechCode;
  };

  const trainWord = async () => {
    const arr = [];
    const currentWord = globalWords.pop();
    const partOfSpeech = await getWordDetalization(currentWord.wordTranslate);
    globalWords.forEach(async x => {
      const anotherWordPartOfSpeech = await getWordDetalization(x.wordTranslate);
      if (partOfSpeech === anotherWordPartOfSpeech && arr.length < 5) {
        arr.push(x);
      }
    });
    arr.push(currentWord);
    // console.log(JSON.stringify(arr));
    return arr;
  };

  useEffect(() => {
    if (globalWords.length) {
      trainWord().then(words => setCurrentWords(words));
    }
  }, []);

  return (
    <div className="audiocall container d-flex justify-content-center">
      <div className="audiocall__content col-lg-8 col-md-10 container flex-column">
        <div className="audiocall__hint d-flex justify-content-center">
          <button type="button" className="audiocall__voice-btn col-md-3 btn">
            <Megaphone className="audiocall__icon" />
          </button>
        </div>
        <ol className="audiocall__list row">
          {currentWords.map(word => (
            <Word key={word.id} word={word} />
          ))}
        </ol>
        <button className="audiocall__btn btn" type="button">
          не знаю
        </button>
      </div>
    </div>
  );
};

Game.propTypes = {
  globalWords: PropTypes.array,
};
