import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CONSTANTS } from '../../shared/constants';
import { ReactComponent as Megaphone } from '../../assets/svg/megaphone.svg';

export const WordInfo = props => {
  const { answered, word } = props;
  const current = word[0];
  const [info, setInfo] = useState({ image: null, word: null });
  const playWord = () => {
    const voice = new Audio(`${CONSTANTS.URL.FILES}/${current.audio}`);
    voice.play();
  };

  useEffect(() => {
    if (word.length > 0 && !answered) {
      setInfo({ image: `${CONSTANTS.URL.FILES}/${word[0].image}`, word: word[0].word });
      playWord();
    }
  }, [word]);

  if (!answered) {
    return (
      <div className="audiocall__hint d-flex justify-content-center">
        <button
          type="button"
          className="audiocall__voice-btn btn"
          onClick={() => {
            playWord();
          }}
        >
          <Megaphone className="audiocall__icon-large" />
        </button>
      </div>
    );
  }

  return (
    <div className="audiocall__hint">
      <div className="audiocall__image-circular">
        <img src={info.image} className="audiocall__image" alt="descriptive" />
      </div>
      <div className="audiocall__row">
        <button
          type="button"
          className="audiocall__voice-btn-answered btn"
          onClick={() => {
            playWord();
          }}
        >
          <Megaphone className="audiocall__icon" />
        </button>
        <h2>{info.word}</h2>
      </div>
    </div>
  );
};

WordInfo.propTypes = {
  answered: PropTypes.bool,
  word: PropTypes.array,
};
