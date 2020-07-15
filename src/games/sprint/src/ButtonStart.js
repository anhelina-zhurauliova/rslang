import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import gear from '../../../assets/svg/gear.svg';
import exit from '../../../assets/svg/exit.svg';

const propTypes = {
  settingsClick: PropTypes.settingsClick,
  fetchNewWords: PropTypes.fetchNewWords,
  closeGame: PropTypes.closeGame,
};

class ButtonStart extends PureComponent {
  render() {
    const { settingsClick, fetchNewWords, closeGame } = this.props;
    return (
      <>
        <button type="button" onClick={closeGame} onKeyDown={closeGame}>
          <img src={exit} alt="Exit" id="exit" className="exitButton" />
        </button>
        <button type="button" onClick={settingsClick} onKeyDown={settingsClick}>
          <img src={gear} alt="Settings" id="settings" className="gearButton" />
        </button>
        <div className="sprint-start">
          <h1 className="sprint">СПРИНТ</h1>
          <div className="sprint-info">
            Знаешь много слов на английском,но без понятия:что они означают?Разберись с переводом
            слов в увлекательной игре Спринт!
          </div>
          <button
            type="button"
            className="btn btn-success button-start"
            id="btn-success"
            onClick={fetchNewWords}
            onKeyDown={fetchNewWords}
          >
            Начать игру
          </button>
        </div>
      </>
    );
  }
}
ButtonStart.propTypes = propTypes;
export default ButtonStart;
