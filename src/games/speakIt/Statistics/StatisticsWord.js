import React from 'react';

const myStyle = {
  display: 'flex',
  cursor: 'pointer',
  lineHeight: '50px',
};
const text = {
  margin: '0 20px'
};
const volume = {
  height: 20,
  padding: '16px 0',
};

const StatisticsWord = ({word}) => {

  const handleClick = () => {
    new Audio("https://raw.githubusercontent.com/ilyayudovin/rslang-data/master/data/" + word.audio.substring(6)).play();
  };

  return (
    <div style={myStyle} onClick={handleClick}>
      <img style={volume} src={'https://image.flaticon.com/icons/svg/786/786474.svg'}/>
      <p style={text}>{word.word}</p>
      <p style={text}>{word.transcription}</p>
      <p style={text}>{word.wordTranslate}</p>
    </div>
  );
};

export default StatisticsWord;
