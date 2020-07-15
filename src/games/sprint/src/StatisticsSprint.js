import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  trueAnser: PropTypes.number,
  failAnswer: PropTypes.number,
  gamePoints: PropTypes.func,
  fetchNewWords: PropTypes.func,
};
class StatisticsSprint extends PureComponent {
  render() {
    const { trueAnser, failAnswer, gamePoints, fetchNewWords } = this.props;
    return (
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
          <button type="button" className="btn btn-danger" id="btn-fail" onClick={fetchNewWords}>
            Тренироваться еще
          </button>
        </div>
      </div>
    );
  }
}
StatisticsSprint.propTypes = propTypes;
export default StatisticsSprint;
