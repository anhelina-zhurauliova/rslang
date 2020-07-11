import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CONSTANTS } from '../../shared/constants';
import { ReactComponent as Megaphone } from '../../assets/svg/megaphone.svg';
import { Word } from './Word';

export const Game = props => {
  const { globalWords, cookies } = props;
  const [currentWords, setCurrentWords] = useState([]);
  const { token, userId } = cookies.authState.user;

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const getSimilarWords = async word => {
    const url = new URL(`${CONSTANTS.URL.API}`);
    const filter = {
      $or: [
        {
          wordTranslate: {
            $regex: `\\w*${word.substring(word.length - 2)}$`,
            $options: 'i',
          },
        },
        {
          wordTranslate: {
            $regex: `^${word.substring(0, 2)}\\w*`,
            $options: 'i',
          },
        },
      ],
    };
    url.pathname = `users/${userId}/aggregatedWords`;
    url.searchParams.append('wordsPerPage', JSON.stringify(5));
    url.searchParams.append('filter', JSON.stringify(filter));
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Accept', 'application/json');
    const rawResponse = await fetch(url, { headers });
    const content = await rawResponse.json();
    return content[0].paginatedResults;
  };

  const trainWord = async () => {
    const currentWord = globalWords.pop();
    const similarWords = await getSimilarWords(currentWord.wordTranslate);
    const result = similarWords.filter(word => word.word !== currentWord.word).slice(0, 4);
    result.push(currentWord);
    return shuffle(result);
  };

  useEffect(() => {
    if (globalWords.length > 0) {
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
            // eslint-disable-next-line no-underscore-dangle
            <Word key={word._id} word={word} />
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
  cookies: PropTypes.object,
};
