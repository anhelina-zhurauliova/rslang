import React, {useState} from 'react';

export const myStyle = {
  position: 'relative',
  width: 200,
  height: 70,
  border: '1px solid rgb(76,76,112)',
  margin: '10px 10px',
  fontSize: 24,
  boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  cursor: 'pointer',
  transitionDuration: '0.5s',
  animationDuration: '0.5s',
  textAlign: 'center',
  backgroundColor: 'rgb(244,225,219)',
  color: 'rgb(122,112,165)'
};
const btnText = {
  margin: 0,
};
export const clicked = {
  backgroundColor: 'rgb(241,190,235)',
  color: 'rgb(77,80,115)',
  boxShadow: 'none'
};
const volume = {
  width: 30,
  position: 'absolute',
  left: 10,
  cursor: 'pointer'
};
const correct = {
  width: 30,
  position: 'absolute',
  right: -10,
  top: -10,
  cursor: 'pointer',
  display: 'none'
};
const showCorrect = {
  display: 'block'
};
const Word = ({ setTranslation, setImage, transcript,id,isClicked,setIsClicked,isRefresh,setAnswered,answered,word,setIsRefresh}) => {
  const [guessWords,setGuessWords] = useState(false);

  let styles = myStyle;
  let answeredStyles = correct;

  const getTranslation = (word) => {
    return new Promise((resolve) => {
      const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200422T162640Z.ef1ea1591166b847.dfa1ff8069ce0458e76505742f68d7696deb893d&text= ${word.word} &lang=en-ru`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data.text);
          setTranslation(data.text.toString());
          setImage("https://raw.githubusercontent.com/ilyayudovin/rslang-data/master/data/" + word.image.substring(6));
          new Audio("https://raw.githubusercontent.com/ilyayudovin/rslang-data/master/data/" + word.audio.substring(6)).play();
          setIsClicked(id);
          resolve();
        });
    })
  };

  const finalSentence = transcript.toString().split(' ');
  transcript = finalSentence[Array.from(finalSentence).length - 1];

  console.log(transcript);


  if(transcript === word.word && !guessWords){
    setGuessWords(true);
    setAnswered(answered.concat(word));
  }

  if (guessWords) {
    if(transcript === ''){
      setGuessWords(false);
    }
    styles = Object.assign({}, myStyle, clicked);
    answeredStyles = Object.assign({}, correct, showCorrect);
  }
  if(isClicked === id){
    styles = Object.assign({}, myStyle, clicked);
  }

  // if(isRefresh){
  //   styles = myStyle;
  //   answeredStyles = correct;
  //   setIsRefresh(false);
  //   // setGuessWords([]);
  // }

  return (
    <div style={styles} onClick={() => getTranslation(word)}>
      <img style={answeredStyles} src={'https://image.flaticon.com/icons/svg/190/190411.svg'}/>
      <img style={volume} src={'https://image.flaticon.com/icons/svg/786/786474.svg'}/>
      <p style={btnText}>{word.word}</p>
      <p style={btnText}>{word.transcription}</p>
    </div>
  );
};

export default Word;
