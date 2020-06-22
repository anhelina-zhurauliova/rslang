import React, { useState } from 'react';

export const Notification = () => {
  const [state, setState] = useState({ isVisible: false });

  const toggleNotification = () => {
    if (state.isVisible === false) {
      setState({ isVisible: true });
    } else {
      setState({ isVisible: false });
    }
  };

  if (!state.isVisible) {
    return (
      <button type="submit" className="btn btn-primary m-1" onClick={toggleNotification}>
        Show Notification
      </button>
    );
  }

  return (
    <div className="card">
      <div className="text-center">
        <button className="close" type="button" aria-label="Close" onClick={toggleNotification}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="card-header">Well Done!</div>
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </p>
          <button type="button" className="btn btn-primary m-1">
            Settings
          </button>
          <button type="button" className="btn btn-primary m-1">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
