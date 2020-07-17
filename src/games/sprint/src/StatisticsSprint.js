import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import exit from '../../../assets/svg/exit.svg';
import './statistics.scss';

const propTypes = {
  trueAnser: PropTypes.number,
  failAnswer: PropTypes.number,
  gamePoints: PropTypes.number,
  trainGame: PropTypes.func,
  closeGame: PropTypes.func,
  idiomaticReactList1: PropTypes.func,
  idiomaticReactList2: PropTypes.func,
};
class StatisticsSprint extends PureComponent {
  render() {
    const {
      trueAnser,
      failAnswer,
      gamePoints,
      trainGame,
      closeGame,
      idiomaticReactList1,
      idiomaticReactList2,
    } = this.props;

    return (
      <>
        <button type="button" onClick={closeGame} onKeyDown={closeGame}>
          <img src={exit} alt="Exit" className="exitButton" />
        </button>
        <div className="sprint-game stat">
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
          {idiomaticReactList1()}
          <div>
            Количество неправильных ответов:
            {failAnswer}
          </div>
          {idiomaticReactList2()}
        </div>
        <div id="btn-status" className="train">
          <button
            type="button"
            className="btn btn-danger train-button "
            id="btn-fail"
            onClick={trainGame}
          >
            Тренироваться еще
          </button>
        </div>
      </>
    );
  }
}
StatisticsSprint.propTypes = propTypes;
export default StatisticsSprint;
