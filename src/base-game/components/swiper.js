import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Card } from '../../components/card/Card';
import ProgressBar from '../../components/progressbar/Progressbar';
import '../baseGame.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSwiperWithParams = ({ words, token, userId, createUserWord, shouldTurnOnSound }) => {
  const [inputValue, setInputValue] = useState('');
  const [studiedWord, setStudiedWord] = useState([]);
  const [userMistakes, setUserMistakes] = useState([]);
  const [lastStudiedCard, setLastStudiedCard] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [shouldShowInput, setShowInput] = useState({});
  const [shouldShowStudiedWord, setShowStudiedWord] = useState({});
  const slider = useRef(null);

  const getInputValue = value => {
    setInputValue(value);
  };

  const getStudiedWord = value => {
    setStudiedWord(value);
  };

  const goNext = () => {
    slider.current.slickNext();
  };

  const goPrev = () => {
    slider.current.slickPrev();
  };
  const playAudioMeaning = idx => {
    if (shouldTurnOnSound) {
      const audioWordMeaning = new Audio(
        `https://raw.githubusercontent.com/irinainina/rslang-data/master/${words[idx].audioMeaning}`,
      );
      audioWordMeaning.play();
    }
  };
  const playAudioExample = idx => {
    if (shouldTurnOnSound) {
      const audioWordExample = new Audio(
        `https://raw.githubusercontent.com/irinainina/rslang-data/master/${words[idx].audioExample}`,
      );
      audioWordExample.play();
      audioWordExample.onended = () => {
        playAudioMeaning(currentCard);
      };
    }
  };
  const playAudioWord = idx => {
    if (shouldTurnOnSound) {
      const audioWord = new Audio(
        `https://raw.githubusercontent.com/irinainina/rslang-data/master/${words[idx].audio}`,
      );
      audioWord.play();
      audioWord.onended = () => {
        playAudioExample(currentCard);
      };
    }
  };

  const checkInput = () => {
    setUserMistakes([]);
    if (inputValue !== studiedWord) {
      const arr = inputValue.split('');
      studiedWord.split('');
      arr.forEach((el, i) => {
        if (el !== studiedWord[i]) {
          setUserMistakes(prevState => [...prevState, i]);
        } else if (arr.length < studiedWord.length) {
          setUserMistakes(prevState => [...prevState, i + arr.length]);
        }
      });
      setInputValue('');
      setShowStudiedWord(prevState => ({ ...prevState, [currentCard]: true }));
      setShowInput(prevState => ({ ...prevState, [currentCard]: true }));
    } else {
      setCompleted(completed + 100 / 40);
      goNext();
      setShowStudiedWord(prevState => ({ ...prevState, [currentCard]: false }));
      setShowInput(prevState => ({ ...prevState, [currentCard]: false }));
      setLastStudiedCard(currentCard);
      setInputValue('');
      playAudioWord(currentCard);
    }
  };
  const handleSlideChange = currentSlide => {
    setCurrentCard(currentSlide);
  };

  const handleHardWords = () => {
    createUserWord({
      idUser: userId,
      wordId: words[currentCard].id,
      word: { difficulty: 'hard' },
    });
  };
  // eslint-disable-next-line no-unused-vars
  const getHardWords = async id => {
    const rawResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/users/${id}/aggreg`,
      {
        method: 'GET',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      },
    );
    const content = await rawResponse.json();
    return content;
  };

  const settingsSlider = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    draggable: false,
    afterChange: handleSlideChange,
  };

  return (
    <div>
      <button type="button" className="slider__button slider__prev" onClick={goPrev}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1L1 9L9 17M17 9H2.14286H17Z"
            stroke="#5C496D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLineJoin="round"
          />
        </svg>
      </button>
      <Slider ref={slider} {...settingsSlider}>
        {words.map((word, i) => {
          return shouldShowInput[i] === false || shouldShowStudiedWord[i] === true ? (
            <Card
              сardNumber={i}
              words={words}
              key={word.id}
              getInputValue={getInputValue}
              getStudiedWord={getStudiedWord}
              userMistakes={userMistakes}
              lastStudiedCard={lastStudiedCard}
              currentCard={currentCard}
              shouldShowInput={shouldShowInput[i]}
              inputValue={inputValue}
              shouldShowStudiedWord={shouldShowStudiedWord[i]}
              shouldTurnOnSound={shouldTurnOnSound}
            />
          ) : (
            <Card
              сardNumber={i}
              words={words}
              key={word.id}
              getInputValue={getInputValue}
              getStudiedWord={getStudiedWord}
              userMistakes={userMistakes}
              lastStudiedCard={lastStudiedCard}
              currentCard={currentCard}
              shouldShowInput
              inputValue={inputValue}
              shouldShowStudiedWord={false}
              shouldTurnOnSound={shouldTurnOnSound}
            />
          );
        })}
      </Slider>
      <button type="button" className="slider__button slider__next" onClick={goNext}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1L17 9L9 17M0.999999 9H15.8571H0.999999Z"
            stroke="#5C496D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLineJoin="round"
          />
        </svg>
      </button>
      <div className="progressbar__container">
        <ProgressBar bgcolor="#5C496D" completed={completed} />
        <div className="progressbar__values">
          <span className="start-value">0</span>
          <span className="end-value">40</span>
        </div>
      </div>
      <div className="buttons_control__container">
        <button className="button" type="button">
          Удалить
        </button>
        <button className="button" type="button" onClick={handleHardWords}>
          Сложное слово
        </button>
        <button className="button" type="submit" onClick={goNext}>
          Дальше
        </button>
        <button className="button" type="submit" onClick={checkInput}>
          Показать ответ
        </button>
      </div>
    </div>
  );
};
SimpleSwiperWithParams.propTypes = {
  words: PropTypes.array,
  createUserWord: PropTypes.func,
  token: PropTypes.string,
  userId: PropTypes.string,
  shouldTurnOnSound: PropTypes.bool,
};

export default SimpleSwiperWithParams;
