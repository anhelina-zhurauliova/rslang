import React, {useState} from 'react';
import {myStyle} from "../../WordsList/Word";

const Refresh = ({resetTranscript,setTranscript, stopListening,setImage,setTranslation,setIsClicked,setIsRefresh,setAnswered}) => {

  const handleClick = () => {
   setImage('https://alfaschool.ru/wp-content/uploads/2016/12/keep-calm-and-learn-english-1283.png');
   setTranslation('Keep Calm and learn English');
   setIsClicked(0);
   setAnswered([]);
    resetTranscript();
    stopListening();
  };

  return (
      <div style={myStyle} onClick={handleClick}>Refresh</div>
  );
};

export default Refresh;
