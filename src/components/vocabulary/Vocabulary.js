/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-danger-with-children */
import React, { useState, useEffect } from 'react';
import requestURL from '../../shared/constants';
import { ReactComponent as Megaphone } from '../../assets/svg/megaphone.svg';
import './vocabulary.scss';

const defaultQuery = 'words';

export const Vocabulary = () => {
  const [vocabularyState, setVocabularyState] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const wordsUrl = `${requestURL}/${defaultQuery}`;
      try {
        const res = await fetch(wordsUrl);
        if (!res.ok) {
          res.text().then(text => {
            throw Error(text);
          });
        }
        const data = await res.json();
        setVocabularyState(data);
      } catch (error) {
        // ToDo: handle errors
      }
    }
    fetchData();
  }, []);
  const playWord = e => {
    e.preventDefault();
    const link = vocabularyState.find(obj => obj.id === e.target.id).audio;
    const audio = new Audio(`${requestURL}/${link}`);
    audio.play();
  };
  function createMarkup(text) {
    return { __html: text };
  }
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item align-items-center">
        <h2>Выученные слова</h2>
        <p className="text-secondary mb-0">
          Число слов:
          {vocabularyState.length}
        </p>
      </li>
      {vocabularyState.map(word => {
        return (
          <li key={word.id} className="list-group-item d-flex align-items-center">
            <button className="btn" type="button" onClick={e => playWord(e)}>
              <Megaphone className="group__list-megaphone" />
              {/* <img
                className="mr-3"
                height="30"
                id={word.id}
                src="./assets/img/megaphone.svg"
                alt="Speak it"
              /> */}
            </button>
            <div className="words-container">
              <h5 className="text-primary mb-0">{word.word}</h5>
              <p>{word.wordTranslate}</p>
              <p className="mb-o" dangerouslySetInnerHTML={createMarkup(word.textExample)}></p>
              <p className="text-secondary mb-0">Давность: 11 часов назад | Повторений: 6</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
