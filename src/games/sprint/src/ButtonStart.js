/* eslint-disable react/jsx-one-expression-per-line */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import gear from '../../../assets/svg/gear.svg';
import { ReactComponent as Close } from '../../../assets/svg/close.svg';
import letterO from './letterO.png';
import '../../audiocall/audiocall.scss';

const propTypes = {
  settingsClick: PropTypes.func,
  fetchNewWords: PropTypes.func,
};

class ButtonStart extends PureComponent {
  render() {
    const { settingsClick, fetchNewWords } = this.props;
    return (
      <>
        <Link className="audiocall__close base__game__close" to="/games">
          <Close className="audiocall__close-icon" />
        </Link>
        <button type="button" onClick={settingsClick} onKeyDown={settingsClick}>
          <img src={gear} alt="Settings" id="settings" className="gearButton" />
        </button>
        <div className="sprint-start">
          <h1 className="sprint">
            C
            <img src={letterO} className="zzz" alt="none" />
            SMIC{' '}
          </h1>
          <h1 className="h1">VELOCITY</h1>
          <div className="sprint-info">
            Знаешь много слов на английском,но без понятия:что они означают?Разберись с переводом
            слов в увлекательной игре Спринт!
          </div>
          <button
            type="button"
            className="button-start"
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
