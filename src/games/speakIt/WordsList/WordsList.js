/* eslint react/prop-types: 0 */
/* eslint-disable */
import React from 'react';
import Word from './Word';
import Tools from '../Tools/Tools';

const myStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  maxWidth: 1110,
  margin: '0 auto',
};

const WordList = ({
  words,
  setTranslation,
  setImage,
  recognition,
  startListening,
  transcript,
  listening,
  setShowStatistics,
  setAnswered,
  answered,
  isRefresh,
  setIsRefresh,
  isClicked,
  setIsClicked,
  setTranscript,
  resetTranscript,
  stopListening,
}) => {
  let i = 1;
  return (
    <div style={myStyle}>
      {words === undefined
        ? null
        : words.map(word => (
          <Word
            id={i++}
            setTranslation={setTranslation}
            setImage={setImage}
            transcript={transcript}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            isRefresh={isRefresh}
            setIsRefresh={setIsRefresh}
            setAnswered={setAnswered}
            answered={answered}
            word={word}
          />
          ))}
      <Tools
        recognition={recognition}
        startListening={startListening}
        stopListening={stopListening}
        setTranslation={setTranslation}
        setImage={setImage}
        listening={listening}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        setIsRefresh={setIsRefresh}
        setShowStatistics={setShowStatistics}
        setAnswered={setAnswered}
        setTranscript={setTranscript}
        resetTranscript={resetTranscript}
      />
    </div>
  );
};

export default WordList;
