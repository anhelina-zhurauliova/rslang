import React from 'react';
import { useHistory } from 'react-router-dom';

const Hints = () => {
  // const [hints, setHints] = useState(1);
  const history = useHistory();

  const checkAutoListening = () => {
    // if (hints.isAmend) {
    //   setHints({ isAutoListening: !hints.isAutoListening });
    // }
  };

  const showTranslation = () => {
    // if (hints.isAmend) {
    //   setHints({ isTranslation: !hints.isTranslation });
    // }
  };

  const listenPronounce = () => {
    // if (hints.isAmend) {
    //   setHints({ isPronounce: !hints.isPronounce });
    // }
  };

  const showBacground = () => {
    history.push('/settings');
    // if (hints.isAmend) {
    //   setHints({ isBacground: !hints.isBacground });
    // }
  };

  return (
    <div className="col-8 col-sm-5 mb-3">
      <div className="ml-auto text-center">
        <button
          type="button"
          className="btn-game btn btn-secondary ml-2 mr-1"
          onClick={checkAutoListening}
        >
          1
        </button>
        <button
          type="button"
          className="btn-game btn btn-secondary mr-1 disabled"
          onClick={showTranslation}
        >
          2
        </button>
        <button
          type="button"
          className="btn-game btn btn-secondary mr-1 disabled"
          onClick={listenPronounce}
        >
          3
        </button>
        <button
          type="button"
          className="btn-game btn btn-secondary mr-1 disabled"
          onClick={showBacground}
        >
          X
        </button>
      </div>
    </div>
  );
};

export { Hints };
