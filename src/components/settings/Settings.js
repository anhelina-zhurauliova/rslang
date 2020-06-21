/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const Settings = () => (
  <div className="container">
    <button className="btn btn-secondary" type="button">
      Settings
    </button>
    <div className="input-group input-group-sm mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Daily limit of words</span>
      </div>
      <input
        className="form-control"
        type="number"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <div className="input-group input-group-sm mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Daily limit of cards</span>
      </div>
      <input
        className="form-control"
        type="number"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <div className="form-group form-check">
      <input className="form-check-input" type="checkbox" id="smth" />
      <label className="form-check-label" id="sds" htmlFor="exampleCheck1">
        Translate
      </label>
    </div>
    <div className="form-group form-check">
      <input className="form-check-input" type="checkbox" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Transcription
      </label>
    </div>
    <div className="form-group form-check">
      <input className="form-check-input" type="checkbox" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Image
      </label>
    </div>
    <div className="form-group form-check">
      <input className="form-check-input" type="checkbox" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Sentence for best understanding
      </label>
    </div>
    <div className="form-group form-check">
      <input className="form-check-input" type="checkbox" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Sentence example of usage
      </label>
    </div>
  </div>
);
