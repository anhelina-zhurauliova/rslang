/* eslint react/prop-types: 0 */
import React from 'react';
import { useMedia } from 'react-media';
import StatisticsWord from './StatisticsWord';

const GLOBAL_MEDIA_QUERIES = {
  small: '(max-width: 599px)',
  medium: '(min-width: 600px) and (max-width: 1199px)',
  large: '(min-width: 1200px)',
};

const statistics = {
  minWidth: 320,
  width: 600,
  padding: 40,
  margin: '0 auto',
  fontSize: 25,
  backgroundColor: '#484862',
  boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)',
};
const responsiveStatistics = {
  width: '100%',
};
const numberOfCorrect = {
  backgroundColor: 'lightgreen',
  fontSize: 20,
  padding: '0 14px',
  borderRadius: 20,
  color: 'white',
};
const numberOfMistakes = {
  backgroundColor: 'orangered',
  fontSize: 20,
  padding: '0 14px',
  borderRadius: 20,
  color: 'white',
};
const wordsBlock = {
  textAlign: 'left',
  margin: 0,
};
const buttonsContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '25px',
};
const button = {
  width: 150,
  backgroundColor: 'lightsalmon',
  textAlign: 'center',
  lineHeight: '50px',
  color: 'white',
  cursor: 'pointer',
  margin: '0 25px',
  transitionDuration: '0.5s',
};
const Statistics = ({ words, setShowStatistics, setWords, answered, setAnswered }) => {
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  let myStyle;
  const getWords = async () => {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${0}&page=${Math.floor(
      Math.random() * Math.floor(29),
    )}`;
    const res = await fetch(url);
    const json = await res.json();
    localStorage.setItem('words', JSON.stringify(json));
    localStorage.setItem('level', '0');
    setWords(json.splice(0, 10));
  };

  const closeStatistics = () => {
    setShowStatistics(false);
  };

  const newGame = () => {
    getWords();
    setAnswered([]);
    setShowStatistics(false);
  };
  answered = [...new Set(answered)];

  if (matches.small) {
    myStyle = { ...statistics, ...responsiveStatistics };
  } else {
    myStyle = statistics;
  }

  return (
    <div style={myStyle}>
      <div>
        <p style={wordsBlock}>
          correct
          <span style={numberOfCorrect}>{answered.length}</span>
        </p>
        <div>
          {answered.map(a => (
            <StatisticsWord word={a} />
          ))}
        </div>
      </div>
      <div>
        <p style={wordsBlock}>
          mistakes
          <span style={numberOfMistakes}>{10 - answered.length}</span>
        </p>
        <div>{words.map(word => !answered.includes(word) && <StatisticsWord word={word} />)}</div>
      </div>
      <div style={buttonsContainer}>
        <div role="presentation" style={button} onClick={closeStatistics}>
          Back
        </div>
        <div role="presentation" style={button} onClick={newGame}>
          New Game
        </div>
      </div>
    </div>
  );
};

export default Statistics;
