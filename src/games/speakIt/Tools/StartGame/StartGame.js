/* eslint react/prop-types: 0 */
import React from 'react';
import { myStyle, clicked } from '../../WordsList/Word';

const startBtn = {
  width: 640,
};

const StartGame = ({ startListening, listening, setIsClicked }) => {
  let styles;

  const handleClick = () => {
    setIsClicked(0);
    startListening();
  };

  if (listening) {
    styles = { ...myStyle, ...startBtn, ...clicked };
    return (
      <div role="presentation" style={styles} onClick={startListening}>
        Speak
      </div>
    );
  }

  styles = { ...myStyle, ...startBtn };
  return (
    <div role="presentation" style={styles} onClick={handleClick}>
      Start Game
    </div>
  );
};

export default StartGame;
