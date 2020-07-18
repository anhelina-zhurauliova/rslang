import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter } from 'react-router-dom';
import gear from '../../../assets/svg/gear.svg';
import { ReactComponent as Close } from '../../../assets/svg/exit.svg';
import letterO from './letterO.png';

const propTypes = {
  settingsClick: PropTypes.func,
  fetchNewWords: PropTypes.func,
};

class ButtonStart extends PureComponent {
  render() {
    const { settingsClick, fetchNewWords } = this.props;
    return (
      <>
        <BrowserRouter>
          <Link to="/games">
            <Close className="exitButton" />
          </Link>
        </BrowserRouter>
        <button type="button" onClick={settingsClick} onKeyDown={settingsClick}>
          <img src={gear} alt="Settings" id="settings" className="gearButton" />
        </button>
        <div className="sprint-start">
          <h1 className="sprint">C<img src={letterO} class="zzz"></img>SMIC </h1>
          <h1>VELOCITY</h1>
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
