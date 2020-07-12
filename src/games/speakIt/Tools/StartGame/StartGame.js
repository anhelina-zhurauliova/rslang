import React, {useState} from 'react';
import {myStyle,clicked} from "../../WordsList/Word";

const startBtn = {
  width: 640
};

const StartGame = ({startListening,listening,setIsClicked}) => {

  let styles;

  const handleClick = () => {
    setIsClicked(0);
    startListening();
  };

  if(listening){
    styles = Object.assign({}, myStyle, startBtn,clicked);
    return (
      <div style={styles} onClick={startListening}>Speak</div>
    );
  }
  else{
    styles = Object.assign({}, myStyle, startBtn);
    return (
      <div style={styles} onClick={handleClick}>Start Game</div>
    );
  }
};

export default StartGame;
