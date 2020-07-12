/* eslint no-shadow: "error" */
/* eslint-disable jsx-a11y/click-events-have-key-events,
 jsx-a11y/no-noninteractive-element-interactions */

import React, { Component } from 'react';
import './sprint.scss';
import logo from '../../../assets/svg/tick.svg';
import voice from '../../../assets/png/voice.png';
import parrot1 from '../../../assets/svg/parrot1.svg';
import parrot2 from '../../../assets/svg/parrot2.svg';
import parrot3 from '../../../assets/svg/parrot3.svg';
import parrot4 from '../../../assets/svg/parrot4.svg';
import stick from '../../../assets/svg/stick.svg';
import exit from '../../../assets/svg/exit.svg';
import exitImage from '../../../assets/svg/exitImage.svg';
import question from '../../../assets/svg/question.svg';
import Timer2 from './Timer';

function CircleSucess() {
  return <img src={logo} alt="Logo" className="circleSucess " />;
}

function Circle() {
  return <div className="circle " />;
}

export function Timer() {
  return (
    <div className="wrapper">
      <div className="timer">
        <div className="timer__line" />
        <div className="timer__body">
          <div className="timer__counter">
            <span>5</span>
            <span>4</span>
            <span>3</span>
            <span>2</span>
            <span>1</span>
            <span>GO!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export class Sprint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerVisible: false,
      gameTimerVisible: false,
      gamePoints: 0,
      bonusPoints: 10,
      successAnswer: 0,
      answer: 0,
      answerTrue: false,
      trueWord: false,
      gameVisible: false,
      buttonStartVisible: true,
      parrot1Visible: false,
      parrot2Visible: false,
      parrot3Visible: false,
      parrot4Visible: false,
      correct1Answer: false,
      correct2Answer: false,
      correct3Answer: false,
      false1Answer: true,
      false2Answer: true,
      false3Answer: true,
      helpVisible: false,
      statisticsVisible: false,
      wordPosition: 0,
      words: [],
      wordsTranslate: [],
      wordsAudio: [],
      wordsAudioMeaning: [],
      wordsGame: [],
      wordsImage: [],
      gameWord: '',
      gameAudio: '',
      gameTranslate: '',
      gameImage: '',
      helpSrc: question,
      trueAnser: 0,
      failAnswer: 0,
    };

    this.fetchNewWords = this.fetchNewWords.bind(this);
    this.fetchWords = this.fetchWords.bind(this);
    this.trueButton = this.trueButton.bind(this);
    this.falseButton = this.falseButton.bind(this);
    this.closeGame = this.closeGame.bind(this);
    this.trueAnserState = this.trueAnserState.bind(this);
    this.trueStatus = this.trueStatus.bind(this);
    this.playWord = this.playWord.bind(this);
    this.help = this.help.bind(this);
  }

  playWord = () => {
    const { gameAudio } = this.state;
    const VOICE = new Audio(
      `https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/${gameAudio}`,
    );
    VOICE.play();
  };

  trueStatus = () => {
    const { gamePoints, wordsGame, wordsAudio, wordsImage, bonusPoints } = this.state;

    this.setState(state => ({
      gamePoints: gamePoints + bonusPoints,
      successAnswer: state.successAnswer++,
      wordPosition: state.wordPosition++,
      gameWord: wordsGame[state.wordPosition],
      gameAudio: wordsAudio[state.wordPosition],
      gameImage: wordsImage[state.wordPosition],
      answerTrue: true,
      helpVisible: false,
      helpSrc: question,
      trueAnser: state.trueAnser++,
    }));
    this.parrotState();
    this.trueAnserState();
  };

  trueAnserState = () => {
    const { answerTrue, correct1Answer, correct2Answer } = this.state;
    if (answerTrue) {
      this.setState(() => ({
        correct1Answer: true,
        false1Answer: false,
        correct2Answer: false,
        correct3Answer: false,
        false2Answer: true,
        false3Answer: true,
      }));
    }
    if (answerTrue && correct1Answer) {
      this.setState(() => ({
        correct1Answer: true,
        false1Answer: false,
        correct2Answer: true,
        false2Answer: false,
        correct3Answer: false,
        false3Answer: true,
      }));
    }

    if (answerTrue && correct1Answer && correct2Answer) {
      this.setState(() => ({
        correct1Answer: true,
        false1Answer: false,
        correct2Answer: true,
        false2Answer: false,
        correct3Answer: true,
        false3Answer: false,
      }));
    }

    if (!answerTrue) {
      this.setState(() => ({
        correct1Answer: false,
        false1Answer: true,
        correct2Answer: false,
        false2Answer: true,
        correct3Answer: false,
        false3Answer: true,
      }));
    }
  };

  parrotState = () => {
    const { successAnswer } = this.state;
    if (successAnswer >= 3) {
      this.setState(() => ({
        bonusPoints: 20,
        parrot1Visible: true,
        correct1Answer: false,
        correct2Answer: false,
        correct3Answer: false,
        false1Answer: true,
        false2Answer: true,
        false3Answer: true,
      }));
    }
    if (successAnswer >= 6) {
      this.setState(() => ({
        bonusPoints: 40,
        parrot1Visible: true,
        parrot2Visible: true,
        correct1Answer: false,
        correct2Answer: false,
        correct3Answer: false,
        false1Answer: true,
        false2Answer: true,
        false3Answer: true,
      }));
    }
    if (successAnswer >= 9) {
      this.setState(() => ({
        bonusPoints: 80,
        parrot1Visible: true,
        parrot2Visible: true,
        parrot3Visible: true,
        correct1Answer: false,
        correct2Answer: false,
        correct3Answer: false,
        false1Answer: true,
        false2Answer: true,
        false3Answer: true,
      }));
    }
    if (successAnswer >= 12) {
      this.setState(() => ({
        bonusPoints: 80,
        parrot1Visible: true,
        parrot2Visible: true,
        parrot3Visible: true,
        parrot4Visible: true,
        correct1Answer: false,
        correct2Answer: false,
        correct3Answer: false,
        false1Answer: true,
        false2Answer: true,
        false3Answer: true,
      }));
    }
  };

  fetchWords = async () => {
    const {
      wordPosition,
      wordsGame,
      wordsAudio,
      wordsImage,
      words,
      wordsAudioMeaning,
      wordsTranslate,
    } = this.state;
    const page = Math.round(Math.random() * 10);
    const group = Math.round(Math.random() * 6);
    const rowResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`,
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      });
    rowResponse.forEach(word => words.push(word));
    words.forEach(word => wordsGame.push(word.word));
    words.forEach(word => wordsTranslate.push(word.wordTranslate));
    words.forEach(word => wordsAudio.push(word.audio));
    words.forEach(word => wordsAudioMeaning.push(word.audioMeaning));
    words.forEach(word => wordsImage.push(word.image));

    const randomValue = Math.round(Math.random() * 20);
    if (randomValue % 2 === 0) {
      this.setState(() => ({
        gameTranslate: wordsTranslate[wordPosition],
        trueWord: true,
      }));
    } else {
      this.setState(() => ({
        gameTranslate: wordsTranslate[randomValue],
        trueWord: false,
      }));
    }
    this.setState(() => ({
      gameWord: wordsGame[wordPosition],
      gameAudio: wordsAudio[wordPosition],
      gameImage: wordsImage[wordPosition],
    }));
  };

  help = () => {
    const { helpVisible } = this.state;
    if (!helpVisible) {
      this.setState(() => ({
        helpVisible: true,
        helpSrc: exitImage,
      }));
    } else {
      this.setState(() => ({
        helpVisible: false,
        helpSrc: question,
      }));
    }
  };

  fetchNewWords = async () => {
    this.state.words = await this.fetchWords();
    this.setState(() => ({
      buttonStartVisible: false,
      timerVisible: true,
      statisticsVisible: false,
    }));
    setTimeout(() => {
      this.setState(() => ({
        timerVisible: false,
        gameVisible: true,
        gameTimerVisible: true,
      }));
    }, 6200);
    setTimeout(() => {
      this.setState(() => ({
        gameVisible: false,
        // buttonStartVisible: true,
        statisticsVisible: true,
        gameTimerVisible: false,
      }));
    }, 67200);
    const { words } = this.state;
    return words;
  };

  closeGame = () => {
    this.setState(() => ({
      gameVisible: false,
      buttonStartVisible: true,
      gameTimerVisible: false,
      bonusPoints: 10,
      gamePoints: 0,
      parrot1Visible: false,
      parrot2Visible: false,
      parrot3Visible: false,
      parrot4Visible: false,
      correct1Answer: false,
      correct2Answer: false,
      correct3Answer: false,
      false1Answer: true,
      false2Answer: true,
      false3Answer: true,
      answerTrue: false,
      helpVisible: false,
      helpSrc: question,
      trueAnser: 0,
      failAnswer: 0,
    }));
  };

  trueButton = () => {
    const { answer } = this.state;
    // Проверка на использование 20 слов)))
    if (answer === 18) {
      this.fetchWords();
      this.setState(() => ({
        answer: 0,
      }));
    } else {
      this.setState(state => ({
        answer: state.answer++,
      }));
    }
    const { trueWord } = this.state;
    if (trueWord) {
      this.trueStatus();
    } else {
      this.setState(state => ({
        gamePoints: state.gamePoints - 10,
        successAnswer: 0,
        bonusPoints: 10,
        parrot1Visible: false,
        parrot2Visible: false,
        parrot3Visible: false,
        parrot4Visible: false,
        correct1Answer: false,
        correct2Answer: false,
        correct3Answer: false,
        false1Answer: true,
        false2Answer: true,
        false3Answer: true,
        answerTrue: false,
        wordPosition: state.wordPosition++,
        gameWord: state.wordsGame[state.wordPosition],
        gameAudio: state.wordsAudio[state.wordPosition],
        gameImage: state.wordsImage[state.wordPosition],
        helpVisible: false,
        helpSrc: question,
        failAnswer: state.failAnswer++,
      }));
    }
    const randomValue1 = Math.round(Math.random() * 20);
    if (randomValue1 % 2 === 0) {
      const { wordsTranslate, wordPosition } = this.state;
      this.setState(() => ({
        gameTranslate: wordsTranslate[wordPosition],
        trueWord: true,
      }));
    } else {
      const { wordsTranslate } = this.state;
      this.setState(() => ({
        gameTranslate: wordsTranslate[randomValue1],
        trueWord: false,
      }));
    }
  };

  falseButton = () => {
    const { trueWord, answer } = this.state;
    if (answer === 18) {
      this.fetchWords();
      this.setState(() => ({
        answer: 0,
      }));
    } else {
      this.setState(state => ({
        answer: state.answer++,
      }));
    }
    if (!trueWord) {
      this.trueStatus();
    } else {
      this.setState(state => ({
        gamePoints: state.gamePoints - 10,
        successAnswer: 0,
        bonusPoints: 10,
        parrot1Visible: false,
        parrot2Visible: false,
        parrot3Visible: false,
        parrot4Visible: false,
        correct1Answer: false,
        correct2Answer: false,
        correct3Answer: false,
        false1Answer: true,
        false2Answer: true,
        false3Answer: true,
        answerTrue: false,
        wordPosition: state.wordPosition++,
        gameWord: state.wordsGame[state.wordPosition],
        gameAudio: state.wordsAudio[state.wordPosition],
        gameImage: state.wordsImage[state.wordPosition],
        helpVisible: false,
        helpSrc: question,
        failAnswer: state.failAnswer++,
      }));
    }
    const { wordPosition, wordsTranslate } = this.state;
    const randomValue2 = Math.round(Math.random() * 20);
    if (randomValue2 % 2 === 0) {
      this.setState(() => ({
        gameTranslate: wordsTranslate[wordPosition],
        trueWord: true,
      }));
    } else {
      this.setState(() => ({
        gameTranslate: wordsTranslate[randomValue2],
        trueWord: false,
      }));
    }
  };

  render() {
    const {
      timerVisible,
      gameTimerVisible,
      gamePoints,
      gameVisible,
      buttonStartVisible,
      parrot1Visible,
      parrot2Visible,
      parrot3Visible,
      parrot4Visible,
      correct1Answer,
      correct2Answer,
      correct3Answer,
      false1Answer,
      false2Answer,
      false3Answer,
      helpVisible,
      statisticsVisible,
      gameWord,
      gameTranslate,
      gameImage,
      helpSrc,
      trueAnser,
      failAnswer,
    } = this.state;

    const img = `https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/${gameImage}`;
    const startButton = (
      <button
        type="button"
        className="btn btn-success button-start"
        id="btn-success"
        // className = "button-start"
        onClick={this.fetchNewWords}
      >
        Начать игру
      </button>
    );

    return (
      <>
        <div className="container ">
          {buttonStartVisible && (
            <>
              <div className="sprint-start">
                <h1 className="sprint">СПРИНТ</h1>
                <div className="sprint-info">
                  Знаешь много слов на английском,но без понятия:что они означают?Разберись с
                  переводом слов в увлекательной игре Спринт!
                </div>
                {startButton}
              </div>
            </>
          )}
          {timerVisible && <Timer />}
          {gameTimerVisible && <Timer2 />}

          {gameVisible && (
            <>
              {helpVisible && (
                <div className="float-left">
                  <img src={img} className="rounded image-help" alt="..." />
                </div>
              )}
              <img src={exit} alt="Exit" className="exitButton" onClick={this.closeGame} />
              <div className="sprint-game">
                <div className="voice-picture">
                  <img
                    src={voice}
                    alt="Voice"
                    id="voice"
                    className="white-background"
                    onClick={this.playWord}
                  />
                </div>
                <span id="gamePoints">
                  Ваши очки:
                  {gamePoints}
                </span>
                {/* <div>
                  {' '}
                  +
                  {bonusPoints}
                  за каждый правильный ответ
                </div> */}
                <div>-10 за каждый неправильный ответ</div>
                <div>
                  <div className="parrotBar">
                    {parrot1Visible && <img src={parrot1} alt="Parrot1" />}
                    {parrot2Visible && <img src={parrot2} alt="Parrot2" />}
                    {parrot3Visible && <img src={parrot3} alt="Parrot3" />}
                    {parrot4Visible && <img src={parrot4} alt="Parrot4" />}
                  </div>
                  <div className="stick">
                    {' '}
                    <img src={stick} alt="Stick" />
                  </div>
                </div>
                <h2 id="word">{gameWord}</h2>
                <h3 id="wordTranslate">{gameTranslate}</h3>
                <div className="circleBar">
                  {false1Answer && <Circle />}
                  {correct1Answer && <CircleSucess />}
                  {false2Answer && <Circle />}
                  {correct2Answer && <CircleSucess />}
                  {false3Answer && <Circle />}
                  {correct3Answer && <CircleSucess />}
                </div>
                <div id="btn-status" className="sprint-buttons">
                  <button
                    type="button"
                    className="btn btn-danger"
                    id="btn-fail"
                    onClick={this.falseButton}
                  >
                    Неверно
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    id="btn-success"
                    onClick={this.trueButton}
                  >
                    Верно
                  </button>
                </div>
              </div>
              <img src={helpSrc} alt="Question" className="question-mark" onClick={this.help} />
            </>
          )}
          {statisticsVisible && (
            <div className="sprint-game">
              <div>
                Твой результат:
                {gamePoints}
                очков
              </div>
              <div>
                Количество всех ответов:
                {trueAnser + failAnswer}
              </div>
              <div>
                Количество правильных ответов:
                {trueAnser}
              </div>
              <div>
                Количество неправильных ответов:
                {failAnswer}
              </div>
              <div id="btn-status">
                <button
                  type="button"
                  className="btn btn-danger"
                  id="btn-fail"
                  onClick={this.fetchNewWords}
                >
                  Тренироваться еще
                </button>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
