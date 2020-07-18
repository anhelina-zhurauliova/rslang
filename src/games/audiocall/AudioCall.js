import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { Game } from './Game';
import { CONSTANTS } from '../../shared/constants';
import { ReactComponent as Close } from '../../assets/svg/close.svg';
import { ReactComponent as Keyboard } from '../../assets/svg/keyboard.svg';
import letterO from '../../assets/letterO.png';
import './audiocall.scss';

export const AudioCall = () => {
  const [screen, setScreen] = useState({ isStarted: false });
  const [words, setWords] = useState([]);
  const [cookies] = useCookies(['authState']);

  const url = new URL(`${CONSTANTS.URL.API}`);
  const filter = {
    $or: [
      {
        'userWord.difficulty': 'easy',
      },
      {
        userWord: null,
      },
    ],
  };

  const fetchWords = async () => {
    const { token, userId } = cookies.authState.user;
    url.pathname = `users/${userId}/aggregatedWords`;
    url.searchParams.append('userId', JSON.stringify(userId));
    url.searchParams.append('wordsPerPage', JSON.stringify(10));
    url.searchParams.append('filter', JSON.stringify(filter));
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Accept', 'application/json');
    const rawResponse = await fetch(url, { headers });
    const content = await rawResponse.json();
    return content[0].paginatedResults;
  };

  const getWords = async () => {
    const wordsNew = await fetchWords();
    return wordsNew;
  };

  useEffect(() => {
    if (!words.length) {
      getWords().then(array => setWords(array));
    }
  }, [getWords, words.length]);

  if (!screen.isStarted) {
    return (
      <div className="audiocall">
        <Link className="audiocall__close" to="/games">
          <Close className="audiocall__close-icon" />
        </Link>
        <div className="audiocall__content col-lg-8 col-md-10 container flex-column">
          <h1 className="audiocall__header">
            space stati
            <span>
              <img src={letterO} alt="O" className="audiocall__o" />
            </span>
            n
          </h1>
          <p className="audiocall__text">Улучшает восприятие английской речи на слух</p>
          <button
            className="audiocall__btn btn"
            type="button"
            onClick={() => setScreen({ isStarted: true })}
            disabled={!words.length}
          >
            Начать
          </button>
        </div>
        <div className="hint">
          <Keyboard className="hint__icon" />
          <p className="hint__text">Используй клавиши 1, 2, 3, 4, 5 чтобы дать быстрый ответ</p>
        </div>
      </div>
    );
  }
  return <Game globalWords={words} cookies={cookies} />;
};
