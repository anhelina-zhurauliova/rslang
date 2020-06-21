/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const Notification = () => (
  <div className="card">
    <div className="text-center">
      <button className="close" type="button" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="card-header">Well Done!</div>
      <div className="card-body">
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        </p>
        <a className="btn btn-primary m-1" href="#">
          Settings
        </a>
        <a className="btn btn-primary m-1" href="#">
          Continue
        </a>
      </div>
    </div>
  </div>
);
