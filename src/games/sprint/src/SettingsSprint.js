/* eslint-disable react/jsx-one-expression-per-line */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import exit from '../../../assets/svg/exit.svg';

const propTypes = {
  closeSettings: PropTypes.func,
  radioButtonClick0: PropTypes.func,
  radioButtonClick1: PropTypes.func,
  radioButtonClick2: PropTypes.func,
  radioButtonClick3: PropTypes.func,
  radioButtonClick4: PropTypes.func,
  radioButtonClick5: PropTypes.func,
};

class SettingsSprint extends PureComponent {
  render() {
    const {
      closeSettings,
      radioButtonClick0,
      radioButtonClick1,
      radioButtonClick2,
      radioButtonClick3,
      radioButtonClick4,
      radioButtonClick5,
    } = this.props;
    return (
      <div className="sprint-game">
        <button
          type="button"
          onClick={closeSettings}
          onKeyDown={closeSettings}
          className="button-background"
        >
          <img src={exit} alt="Settings" id="settings" className="close-settings" />
        </button>
        <div className="settingsText">
          <span>Адекватно оцени свои способности.</span>
          <span>Будь внимателен на уровнях сложности выше Сложно нет подсказок</span>
        </div>
        <div className="settingsGroup"> Выберите уровень сложности </div>
        <div>
          <input type="radio" id="beginner" name="theGroup" onClick={radioButtonClick0} />
          <span> Начинающий</span>
        </div>
        <div>
          <input type="radio" id="easy" name="theGroup" onClick={radioButtonClick1} />
          <span> Легко</span>
        </div>
        <div>
          <input type="radio" id="middle" name="theGroup" onClick={radioButtonClick2} />
          <span>Средне</span>
        </div>
        <div>
          <input type="radio" id="hard" name="theGroup" onClick={radioButtonClick3} /> Сложно
        </div>
        <div>
          <input type="radio" id="knowEnglish" name="theGroup" onClick={radioButtonClick4} />
          <span> Знаток англиского языка</span>
        </div>
        <div>
          <input type="radio" id="residentOfEngland" name="theGroup" onClick={radioButtonClick5} />
          <span> Житель Англии</span>
        </div>
      </div>
    );
  }
}
SettingsSprint.propTypes = propTypes;
export default SettingsSprint;
