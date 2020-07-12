/* eslint react/prop-types: 0 */
import React from 'react';
import { myStyle } from '../../WordsList/Word';

const Refresh = ({
  resetTranscript,
  stopListening,
  setImage,
  setTranslation,
  setIsClicked,
  setAnswered,
}) => {
  const handleClick = () => {
    setImage(
      'https://alfaschool.ru/wp-content/uploads/2016/12/keep-calm-and-learn-english-1283.png',
    );
    setTranslation('Keep Calm and learn English');
    setIsClicked(0);
    setAnswered([]);
    resetTranscript();
    stopListening();
  };

  return (
    <div role="presentation" style={myStyle} onClick={handleClick}>
      Refresh
    </div>
  );
};

export default Refresh;
