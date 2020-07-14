import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/svg/tick.svg';
import voice from '../../../assets/png/voice.png';
import parrot1 from '../../../assets/svg/parrot1.svg';
import parrot2 from '../../../assets/svg/parrot2.svg';
import parrot3 from '../../../assets/svg/parrot3.svg';
import parrot4 from '../../../assets/svg/parrot4.svg';
import stick from '../../../assets/svg/stick.svg';
import exit from '../../../assets/svg/exit.svg';
import music from '../../../assets/svg/music.svg';

function CircleSucess() {
  return <img src={logo} alt="Logo" className="circleSucess " />;
}

function Circle() {
  return <div className="circle " />;
}

const propTypes = {
  gameImage: PropTypes.gameImage,
  helpVisible: PropTypes.helpVisible,
  closeGame: PropTypes.closeGame,
  listenClick: PropTypes.listenClick,
  parrot1Visible: PropTypes.parrot1Visible,
  parrot2Visible: PropTypes.parrot2Visible,
  parrot3Visible: PropTypes.parrot3Visible,
  parrot4Visible: PropTypes.parrot4Visible,
  gameWord: PropTypes.gameWord,
  gameTranslate: PropTypes.gameTranslate,
  falseButton: PropTypes.falseButton,
  trueButton: PropTypes.trueButton,
  helpPictureVisible: PropTypes.helpPictureVisible,
  helpSrc: PropTypes.helpSrc,
  help: PropTypes.help,
  gameLevel: PropTypes.gameLevel,
  false1Answer: PropTypes.false1Answer,
  false2Answer: PropTypes.false2Answer,
  false3Answer: PropTypes.false3Answer,
  correct1Answer: PropTypes.correct1Answer,
  correct2Answer: PropTypes.correct2Answer,
  correct3Answer: PropTypes.correct3Answer,
  playWord: PropTypes.playWord,
  bonusPoints: PropTypes.bonusPoints,
  gamePoints: PropTypes.gamePoints,
};

class SprintBase extends PureComponent {
  render() {
    const {
      gamePoints,
      parrot1Visible,
      parrot2Visible,
      parrot3Visible,
      parrot4Visible,
      helpVisible,
      helpPictureVisible,
      gameWord,
      gameTranslate,
      gameImage,
      helpSrc,
      gameLevel,
      listenClick,
      help,
      false1Answer,
      false2Answer,
      false3Answer,
      correct1Answer,
      correct2Answer,
      correct3Answer,
      closeGame,
      playWord,
      falseButton,
      trueButton,
      bonusPoints,
    } = this.props;
    const img = `https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/${gameImage}`;
    return (
      <>
        {helpVisible && (
          <div className="float-left">
            <img src={img} className="rounded image-help" alt="..." />
          </div>
        )}

        <button type="button" onClick={closeGame} onKeyDown={closeGame}>
          <img src={exit} alt="Exit" className="exitButton" />
        </button>
        <div className="sprint-game">
          <div className="voice-picture">
            <button
              type="button"
              onClick={playWord}
              onKeyDown={playWord}
              className="button-background"
            >
              <img src={voice} alt="Voice" id="voice" className="voiceImage" />
            </button>
            <button
              type="button"
              onClick={listenClick}
              onKeyDown={listenClick}
              className="button-background"
            >
              <img src={music} alt="Listen" className="listenPictures" />
            </button>
          </div>
          <span id="gamePoints">
            Ваши очки:
            {gamePoints}
          </span>
          <div>
            {bonusPoints}
            за каждый правильный ответ
          </div>
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
            <button type="button" className="btn btn-danger" id="btn-fail" onClick={falseButton}>
              Неверно
            </button>
            <button type="button" className="btn btn-success" id="btn-success" onClick={trueButton}>
              Верно
            </button>
          </div>
          <div>
            Уровень сложности:
            {gameLevel}
          </div>
        </div>
        <div className="keyboard-inform">
          {' '}
          Кнопкам Верно и Неверно соответсвуют клавишы на клавиатуре D и A соотвественно
        </div>
        {helpPictureVisible && (
          <button type="button" onClick={help} onKeyDown={help}>
            <img src={helpSrc} alt="Question" className="question-mark" />
          </button>
        )}
      </>
    );
  }
}
SprintBase.propTypes = propTypes;
export default SprintBase;
