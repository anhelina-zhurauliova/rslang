/* eslint-disable react/jsx-one-expression-per-line */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import exit from '../../../assets/svg/exit.svg';

const propTypes = {
  closeSettings: PropTypes.closeSettings,
  radioButtonClick0: PropTypes.radioButtonClick0,
  radioButtonClick1: PropTypes.radioButtonClick1,
  radioButtonClick2: PropTypes.radioButtonClick2,
  radioButtonClick3: PropTypes.radioButtonClick3,
  radioButtonClick4: PropTypes.radioButtonClick4,
  radioButtonClick5: PropTypes.radioButtonClick5,
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
        <button type="button" onClick={closeSettings} onKeyDown={closeSettings}>
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
