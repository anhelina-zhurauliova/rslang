import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 60,
    };
  }

  componentDidMount() {
    this.doIntervalChange();
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  doIntervalChange = () => {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }));
    }, 1000);
  };

  render() {
    const { count } = this.state;
    return (
      <div className="wrapper2">
        <div className="timer2">
          <div className="timer__line2" />
          <div className="timer__body2">
            <div className="timer__counter2">
              <span>{count}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
