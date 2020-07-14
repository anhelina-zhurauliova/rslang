import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CONSTANTS } from '../../shared/constants';
import { ReactComponent as Megaphone } from '../../assets/svg/megaphone.svg';

export const WordInfo = props => {
  const { answered, word } = props;
  const current = word[0];
  const [info, setInfo] = useState({ image: null, word: null });
  const playWord = useCallback(() => {
    const voice = new Audio(`${CONSTANTS.URL.FILES}/${current.audio}`);
    voice.play();
  });

  useEffect(() => {
    if (word.length > 0 && !answered) {
      setInfo({ image: `${CONSTANTS.URL.FILES}/${word[0].image}`, word: word[0].word });
      playWord();
    }
  }, [answered, playWord, word, word.length]);

  if (answered) {
    return (
      <div className="audiocall__hint d-flex justify-content-center">
        <button
          type="button"
          className="audiocall__voice-btn col-md-3 btn"
          onClick={() => {
            playWord();
          }}
        >
          <Megaphone className="audiocall__icon" />
        </button>
      </div>
    );
  }

  return (
    <div className="audiocall__hint d-flex justify-content-center">
      <img src={info.image} className="rounded-circle img-thumbnail" alt="descriptive" />
      <button
        type="button"
        className="audiocall__voice-btn col-md-3 btn"
        onClick={() => {
          playWord();
        }}
      >
        <Megaphone className="audiocall__icon" />
      </button>
      <h2>{info.word}</h2>
    </div>
  );
};

WordInfo.propTypes = {
  answered: PropTypes.bool,
  word: PropTypes.array,
};
