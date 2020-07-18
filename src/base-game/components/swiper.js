import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Card } from '../../components/card/Card';
import ProgressBar from '../../components/progressbar/Progressbar';
import '../baseGame.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSwiperWithParams = ({ words, userId, createUserWord, shouldTurnOnSound }) => {
  const [inputValue, setInputValue] = useState('');
  const [studiedWord, setStudiedWord] = useState([]);
  const [userMistakes, setUserMistakes] = useState([]);
  const [lastStudiedCard, setLastStudiedCard] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [shouldShowInput, setShowInput] = useState(true);
  const [shouldShowStudiedWord, setShowStudiedWord] = useState(false);
  const [isCorrect, setIsCorrect] = useState({});
  const [settings, setSettings] = useState();
  const slider = useRef(null);

  const getInputValue = value => {
    setInputValue(value);
  };

  const basicSettings = JSON.parse(localStorage.getItem('basicGame'));

  useEffect(() => {
    if (settings === undefined) {
      setSettings(basicSettings);
    }
  }, [settings]);

  const getStudiedWord = value => {
    setStudiedWord(value);
  };

  const goNext = () => {
    if (isCorrect[currentCard]) {
      slider.current.slickNext();
      setShowInput(true);
      setShowStudiedWord(false);
    } else {
      setShowInput(true);
      setShowStudiedWord(true);
    }
  };

  const goPrev = () => {
    slider.current.slickPrev();
    setShowInput(false);
    setShowStudiedWord(false);
  };

  const playAudioMeaning = idx => {
    if (shouldTurnOnSound && settings.isWordMeaning === true) {
      const audioWordMeaning = new Audio(
        `https://raw.githubusercontent.com/irinainina/rslang-data/master/${words[idx].audioMeaning}`,
      );
      audioWordMeaning.play();
      audioWordMeaning.onend = () => {
        goNext();
      };
      goNext();
    }
  };

  const playAudioExample = idx => {
    if (shouldTurnOnSound && settings.isSentenceExample === true) {
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
    if (inputValue) {
      if (inputValue !== studiedWord) {
        const arr = inputValue.split('');
        studiedWord.split('').forEach((el, i) => {
          if (el !== arr[i]) {
            setUserMistakes(prevState => [...prevState, i]);
          } else if (arr.length < studiedWord.length) {
            setUserMistakes(prevState => [...prevState, i + arr.length]);
          }
        });
        setInputValue('');
        setShowStudiedWord(true);
        setShowInput(true);
        setIsCorrect(prevState => ({ ...prevState, [currentCard]: false }));
      } else {
        setCompleted(completed + 100 / settings.wordsPerDay);
        setShowStudiedWord(false);
        setShowInput(false);
        setIsCorrect(prevState => ({ ...prevState, [currentCard]: true }));
        setLastStudiedCard(currentCard);
        setInputValue('');
        playAudioWord(currentCard);
        // goNext();
      }
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

  const onEndHandler = () => {
    // console.log('end!');
  };
  // eslint-disable-next-line no-unused-vars

  const settingsSlider = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    draggable: false,
    infinite: false,
    afterChange: handleSlideChange,
    onEnd: onEndHandler,
  };

  return settings ? (
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
          return (
            <Card
              сardNumber={i}
              words={words}
              key={word.id}
              getInputValue={getInputValue}
              getStudiedWord={getStudiedWord}
              userMistakes={userMistakes}
              lastStudiedCard={lastStudiedCard}
              currentCard={currentCard}
              shouldShowInput={shouldShowInput}
              inputValue={inputValue}
              shouldShowStudiedWord={shouldShowStudiedWord}
              shouldTurnOnSound={shouldTurnOnSound}
              settings={settings}
              isCorrectAnswer={isCorrect[i] === true}
              isFirstCard
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
          <span className="end-value">{settings.wordsPerDay}</span>
        </div>
      </div>
      <div className="buttons_control__container">
        <button className="button" type="button">
          Удалить
        </button>
        <button className="button" type="button" onClick={handleHardWords}>
          Сложное слово
        </button>
        <button className="button" type="submit" onClick={checkInput}>
          Дальше
        </button>
        <button className="button" type="submit" onClick={goNext}>
          Показать ответ
        </button>
      </div>
    </div>
  ) : null;
};

SimpleSwiperWithParams.propTypes = {
  words: PropTypes.array,
  createUserWord: PropTypes.func,
  token: PropTypes.string,
  userId: PropTypes.string,
  shouldTurnOnSound: PropTypes.bool,
};

export default SimpleSwiperWithParams;
