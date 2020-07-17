/* eslint no-shadow: "error" */
/* eslint-disable jsx-a11y/click-events-have-key-events,
 jsx-a11y/no-noninteractive-element-interactions */
import KeyboardEventHandler from 'react-keyboard-event-handler';

import React, { Component } from 'react';
import './sprint.scss';
import success from './audio/success.mp3';
import fail from './audio/error.mp3';
import exitImage from '../../../assets/svg/exitImage.svg';
import question from '../../../assets/svg/question.svg';
import Timer2 from './Timer';
import SettingsSprint from './SettingsSprint';
import StatisticsSprint from './StatisticsSprint';
import ButtonStart from './ButtonStart';
import SprintBase from './SprintBase';

function Timer() {
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
      helpPictureVisible: true,
      statisticsVisible: false,
      settingsVisible: false,
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
      level: 0,
      gameLevel: 'Начинающий',
      audible: true,
      correctWords: [],
      failWords: [],
      noaudible: false,
    };

    this.fetchNewWords = this.fetchNewWords.bind(this);
    this.fetchWords = this.fetchWords.bind(this);
    this.trueButton = this.trueButton.bind(this);
    this.falseButton = this.falseButton.bind(this);
    this.closeGame = this.closeGame.bind(this);
    this.trueAnswerState = this.trueAnswerState.bind(this);
    this.trueStatus = this.trueStatus.bind(this);
    this.playWord = this.playWord.bind(this);
    this.help = this.help.bind(this);
    this.settingsClick = this.settingsClick.bind(this);
    this.closeSettings = this.closeSettings.bind(this);
    this.radioButtonClick0 = this.radioButtonClick0.bind(this);
    this.radioButtonClick1 = this.radioButtonClick1.bind(this);
    this.radioButtonClick2 = this.radioButtonClick2.bind(this);
    this.radioButtonClick3 = this.radioButtonClick3.bind(this);
    this.radioButtonClick4 = this.radioButtonClick4.bind(this);
    this.radioButtonClick5 = this.radioButtonClick5.bind(this);
    this.listenClick = this.listenClick.bind(this);
    this.resultSound = this.resultSound.bind(this);
    this.successVoice = this.successVoice.bind(this);
    this.errorVoice = this.errorVoice.bind(this);
    this.idiomaticReactList1 = this.idiomaticReactList1.bind(this);
    this.idiomaticReactList2 = this.idiomaticReactList2.bind(this);
  }

  playWord = () => {
    const { gameAudio } = this.state;
    const VOICE = new Audio(
      `https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/${gameAudio}`,
    );
    VOICE.play();
  };

  successVoice = () => {
    const { audible } = this.state;
    if (audible) {
      const VOICE = new Audio(success);
      VOICE.play();
    }
  };

  errorVoice = () => {
    const { audible } = this.state;
    if (audible) {
      const VOICE = new Audio(fail);
      VOICE.play();
    }
  };

  trueStatus = () => {
    const {
      gamePoints,
      wordsGame,
      wordsAudio,
      wordsImage,
      bonusPoints,
      gameWord,
      correctWords,
    } = this.state;

    // this.correctWords.push(gameWord);
    this.setState(state => ({
      gamePoints: gamePoints + bonusPoints,
      successAnswer: state.successAnswer++,
      correctWords: [...correctWords, gameWord],
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
    this.trueAnswerState();
  };

  trueAnswerState = () => {
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
      level,
    } = this.state;
    const page = Math.round(Math.random() * 29);
    const rowResponse = await fetch(
      `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${level}`,
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

    const randomValue = Math.random();
    if (randomValue >= 0.5) {
      this.setState(() => ({
        gameTranslate: wordsTranslate[wordPosition],
        trueWord: true,
      }));
    } else {
      this.setState(() => ({
        gameTranslate: wordsTranslate[Math.round(randomValue * 20)],
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
    }, 6700);
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
      statisticsVisible: false,
    }));
  };

  trueButton = () => {
    const { answer } = this.state;
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
      this.successVoice();
      this.trueStatus();
    } else {
      this.errorVoice();
      let points;
      const { gamePoints } = this.state;
      if (gamePoints === 0) {
        points = 0;
      } else {
        points = gamePoints - 10;
      }
      const { gameWord, failWords } = this.state;
      this.setState(state => ({
        gamePoints: points,
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
        failWords: [...failWords, gameWord],
        wordPosition: state.wordPosition++,
        gameWord: state.wordsGame[state.wordPosition],
        gameAudio: state.wordsAudio[state.wordPosition],
        gameImage: state.wordsImage[state.wordPosition],
        helpVisible: false,
        helpSrc: question,
        failAnswer: state.failAnswer++,
      }));
    }
    const randomValue1 = Math.random();
    if (randomValue1 >= 0.5) {
      const { wordsTranslate, wordPosition } = this.state;
      this.setState(() => ({
        gameTranslate: wordsTranslate[wordPosition],
        trueWord: true,
      }));
    } else {
      const { wordsTranslate } = this.state;
      this.setState(() => ({
        gameTranslate: wordsTranslate[Math.round(randomValue1 * 20)],
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
      this.successVoice();
      this.trueStatus();
    } else {
      this.errorVoice();
      let points;
      const { gamePoints, failWords, gameWord } = this.state;
      if (gamePoints === 0) {
        points = 0;
      } else {
        points = gamePoints - 10;
      }

      this.setState(state => ({
        gamePoints: points,
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
        failWords: [...failWords, gameWord],
        gameWord: state.wordsGame[state.wordPosition],
        gameAudio: state.wordsAudio[state.wordPosition],
        gameImage: state.wordsImage[state.wordPosition],
        helpVisible: false,
        helpSrc: question,
        failAnswer: state.failAnswer++,
      }));
    }
    const { wordPosition, wordsTranslate } = this.state;
    const randomValue2 = Math.random();
    if (randomValue2 >= 0.5) {
      this.setState(() => ({
        gameTranslate: wordsTranslate[wordPosition],
        trueWord: true,
      }));
    } else {
      this.setState(() => ({
        gameTranslate: wordsTranslate[Math.round(randomValue2 * 20)],
        trueWord: false,
      }));
    }
  };

  settingsClick = () => {
    this.setState(() => ({
      settingsVisible: true,
      gameVisible: false,
      buttonStartVisible: false,
    }));
  };

  resultSound = () => {
    const voice = 'audio/success.mp3';
    const audio = new Audio(`${voice}`);
    audio.play();
  };

  closeSettings = () => {
    this.setState(() => ({
      settingsVisible: false,
      buttonStartVisible: true,
    }));
  };

  listenClick = () => {
    this.setState(state => ({
      audible: !state.audible,
      noaudible: !state.noaudible,
    }));
  };

  radioButtonClick0 = () => {
    this.setState(() => ({
      level: 0,
      gameLevel: 'Начинающий',
      helpPictureVisible: true,
    }));
  };

  radioButtonClick1 = () => {
    this.setState(() => ({
      level: 1,
      gameLevel: 'Легко',
      helpPictureVisible: true,
    }));
  };

  radioButtonClick2 = () => {
    this.setState(() => ({
      level: 2,
      gameLevel: 'Средне',
      helpPictureVisible: true,
    }));
  };

  radioButtonClick3 = () => {
    this.setState(() => ({
      level: 3,
      gameLevel: 'Сложно',
      helpPictureVisible: true,
    }));
  };

  radioButtonClick4 = () => {
    this.setState(() => ({
      level: 4,
      gameLevel: 'Знаток английского языка',
      helpPictureVisible: false,
    }));
  };

  radioButtonClick5 = () => {
    this.setState(() => ({
      level: 5,
      gameLevel: 'Житель Англии',
      helpPictureVisible: false,
    }));
  };

  idiomaticReactList1 = () => {
    const { correctWords } = this.state;
    return (
      <div>
        <ul>
          {correctWords.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  idiomaticReactList2 = () => {
    const { failWords } = this.state;
    return (
      <div>
        <ul>
          {failWords.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
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
      helpVisible,
      helpPictureVisible,
      statisticsVisible,
      gameWord,
      gameTranslate,
      gameImage,
      helpSrc,
      trueAnser,
      failAnswer,
      bonusPoints,
      settingsVisible,
      gameLevel,
      false1Answer,
      false2Answer,
      false3Answer,
      correct1Answer,
      correct2Answer,
      correct3Answer,
      audible,
      noaudible,
    } = this.state;
    const ComponentTrue = (
      <div>
        <KeyboardEventHandler handleKeys={['d']} onKeyEvent={() => this.trueButton()} />
      </div>
    );
    const ComponentFalse = (
      <div>
        <KeyboardEventHandler handleKeys={['a']} onKeyEvent={() => this.falseButton()} />
      </div>
    );

    return (
      <>
        {ComponentTrue}
        {ComponentFalse}
        <div className="container ">
          {buttonStartVisible && (
            <ButtonStart settingsClick={this.settingsClick} fetchNewWords={this.fetchNewWords} />
          )}
          {timerVisible && <Timer />}
          {gameTimerVisible && <Timer2 />}
          {gameVisible && (
            <SprintBase
              helpVisible={helpVisible}
              closeGame={this.closeGame}
              playWord={this.playWord}
              gamePoints={gamePoints}
              bonusPoints={bonusPoints}
              parrot1Visible={parrot1Visible}
              parrot2Visible={parrot2Visible}
              parrot3Visible={parrot3Visible}
              parrot4Visible={parrot4Visible}
              gameWord={gameWord}
              gameTranslate={gameTranslate}
              falseButton={this.falseButton}
              trueButton={this.trueButton}
              gameLevel={gameLevel}
              helpPictureVisible={helpPictureVisible}
              help={this.help}
              helpSrc={helpSrc}
              gameImage={gameImage}
              listenClick={this.listenClick}
              false1Answer={false1Answer}
              false2Answer={false2Answer}
              false3Answer={false3Answer}
              correct1Answer={correct1Answer}
              correct2Answer={correct2Answer}
              correct3Answer={correct3Answer}
              audible={audible}
              noaudible={noaudible}
            />
          )}
          {statisticsVisible && (
            <StatisticsSprint
              gamePoints={gamePoints}
              trueAnser={trueAnser}
              failAnswer={failAnswer}
              fetchNewWords={this.fetchNewWords}
              closeGame={this.closeGame}
              idiomaticReactList1={this.idiomaticReactList1}
              idiomaticReactList2={this.idiomaticReactList2}
            />
          )}
          {settingsVisible && (
            <SettingsSprint
              radioButtonClick0={this.radioButtonClick0}
              radioButtonClick1={this.radioButtonClick1}
              radioButtonClick2={this.radioButtonClick2}
              radioButtonClick3={this.radioButtonClick3}
              radioButtonClick4={this.radioButtonClick4}
              radioButtonClick5={this.radioButtonClick5}
              closeSettings={this.closeSettings}
            />
          )}
        </div>
      </>
    );
  }
}
