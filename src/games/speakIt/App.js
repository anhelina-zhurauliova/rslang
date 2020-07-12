import React, {useState} from 'react';
import Header from "./Header/Header";
import PlayGround from "./PlayGround/PlayGround";
import Dictaphone from "./Dictaphone/Dictaphone";
import Statistics from "./Statistics/Statistics";

const main = {
  background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(https://media.discordapp.net/attachments/720545085640409091/730704300400967710/mountain4.jpg?width=1194&height=671) no-repeat center center fixed',
  backgroundSize: 'cover'
};

export const Speakit = () => {
  const [image, setImage] = useState('https://alfaschool.ru/wp-content/uploads/2016/12/keep-calm-and-learn-english-1283.png');
  const [words, setWords] = useState();
  const [translation, setTranslation] = useState('Keep Calm and learn English');
  const [speech, setTranscript] = useState('');
  const [listening, setListening] = useState('');
  const [showStatistics, setShowStatistics] = useState(false);
  const [answered, setAnswered] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isClicked, setIsClicked] = useState(0);

  const getWords = async () => {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${0}&page=${Math.floor(Math.random() * Math.floor(29))}`;
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
    localStorage.setItem('words', JSON.stringify(json));
    localStorage.setItem('level', '0');
    setWords(json.splice(0, 10));
  };

  if(words === undefined){
    getWords();
  }
  return (
    <div className="App" style={main}>
      {
        showStatistics
          ? <Statistics words={words} setShowStatistics={setShowStatistics} setWords={setWords} answered={answered} setAnswered={setAnswered}/>
          : <>
            <Header setWords={setWords} setIsRefresh={setIsRefresh} setIsClicked={setIsClicked} setAnswered={setAnswered}/>
            <PlayGround url={image} translation={translation} transcript={speech} listening={listening}/>
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
      }
    </div>
  );
};
