import React, { useState } from 'react';
import { useMedia } from 'react-media';
import Header from './Header/Header';
import PlayGround from './PlayGround/PlayGround';
import Dictaphone from './Dictaphone/Dictaphone';
import Statistics from './Statistics/Statistics';

const GLOBAL_MEDIA_QUERIES = {
  small: '(max-width: 599px)',
  medium: '(min-width: 600px) and (max-width: 1099px)',
  large: '(min-width: 1100px)',
};

const main = {
  minWidth: 320,
  width: '100%',
  background:
    'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(https://media.discordapp.net/attachments/720545085640409091/730704300400967710/mountain4.jpg?width=1194&height=671) no-repeat center center fixed',
  backgroundSize: 'cover',
  height: '100vh',
};
const responsiveMain = {
  height: '100%',
};

export const Speakit = () => {
  const [image, setImage] = useState(
    'https://alfaschool.ru/wp-content/uploads/2016/12/keep-calm-and-learn-english-1283.png',
  );
  const [words, setWords] = useState();
  const [translation, setTranslation] = useState('Keep Calm and learn English');
  const [speech, setTranscript] = useState('');
  const [listening, setListening] = useState('');
  const [showStatistics, setShowStatistics] = useState(false);
  const [answered, setAnswered] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isClicked, setIsClicked] = useState(0);
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  let myStyle;
  if (matches.large) {
    myStyle = main;
  } else {
    myStyle = { ...main, ...responsiveMain };
  }

  document.body.style.overflow = 'visible';

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

  if (words === undefined) {
    getWords();
  }
  return (
    <div style={myStyle}>
      <div className="App">
        {showStatistics ? (
          <Statistics
            words={words}
            setShowStatistics={setShowStatistics}
            setWords={setWords}
            answered={answered}
            setAnswered={setAnswered}
          />
        ) : (
          <>
            <Header
              setWords={setWords}
              setIsRefresh={setIsRefresh}
              setIsClicked={setIsClicked}
              setAnswered={setAnswered}
            />
            <PlayGround
              url={image}
              translation={translation}
              transcript={speech}
              listening={listening}
            />
            <Dictaphone
              setTranscript={setTranscript}
              setListening={setListening}
              words={words}
              setTranslation={setTranslation}
              setImage={setImage}
              setShowStatistics={setShowStatistics}
              setAnswered={setAnswered}
              answered={answered}
              isRefresh={isRefresh}
              setIsRefresh={setIsRefresh}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              speech={speech}
            />
          </>
        )}
      </div>
    </div>
  );
};
