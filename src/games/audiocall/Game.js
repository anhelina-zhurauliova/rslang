import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CONSTANTS } from '../../shared/constants';
import { ReactComponent as Close } from '../../assets/svg/close.svg';
import { Controllers } from './Controllers';

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
    const current = globalWords.pop();
    const similarWords = await getSimilarWords(current.wordTranslate);
    const result = similarWords.filter(word => word.word !== current.word).slice(0, 4);
    current.answer = true;
    result.push(current);
    return shuffle(result);
  };

  const nextWord = () => {
    if (globalWords.length > 0) {
      trainWord().then(words => {
        setCurrentWords(words);
      });
    }
  };

  useEffect(() => {
    nextWord();
  }, []);

  return (
    <div className="audiocall">
      <Link className="audiocall__close" to="/games">
        <Close className="audiocall__close-icon" />
      </Link>
      <Controllers allWords={currentWords} nextWord={nextWord} />
    </div>
  );
};

Game.propTypes = {
  globalWords: PropTypes.array,
  cookies: PropTypes.object,
};
