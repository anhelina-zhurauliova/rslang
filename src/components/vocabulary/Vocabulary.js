import React, { useState, useEffect } from 'react';
import CONSTANTS from '../../shared/constants';
import { Word } from './Word';
import './vocabulary.scss';

const defaultQuery = 'words';

export const Vocabulary = () => {
  const [vocabulary, setVocabulary] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const wordsUrl = `${CONSTANTS.URL.API}/${defaultQuery}`;
      try {
        const res = await fetch(wordsUrl);
        if (!res.ok) {
          res.text().then(text => {
            throw Error(text);
          });
        }
        const data = await res.json();
        setVocabulary(data);
      } catch (error) {
        // ToDo: handle errors
      }
    }
    fetchData();
  }, []);
  return (
    <ul className="vocabulary__list list-group list-group-flush">
      <li className="list-group-item align-items-center">
        <h2>Выученные слова</h2>
        <p className="text-secondary mb-0">
          Число слов:
          {vocabulary.length}
        </p>
      </li>
      {vocabulary.map(word => (
        <Word
          key={word.id}
          audio={word.audio}
          word={word.word}
          translation={word.wordTranslate}
          example={word.textExample}
        />
      ))}
    </ul>
  );
};
