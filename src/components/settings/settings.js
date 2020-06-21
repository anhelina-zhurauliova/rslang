import React from 'react';

export const Settings = () => (
  <div class="container">
    <button class="btn btn-secondary" type="button">
      Settings
    </button>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Daily limit of words</span>
      </div>
      <input
        class="form-control"
        type="number"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Daily limit of cards</span>
      </div>
      <input
        class="form-control"
        type="number"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <div class="form-group form-check">
      <input class="form-check-input" type="checkbox" />
      <label class="form-check-label" for="exampleCheck1">
        Translate
      </label>
    </div>
    <div class="form-group form-check">
      <input class="form-check-input" type="checkbox" />
      <label class="form-check-label" for="exampleCheck1">
        Transcription
      </label>
    </div>
    <div class="form-group form-check">
      <input class="form-check-input" type="checkbox" />
      <label class="form-check-label" for="exampleCheck1">
        Image
      </label>
    </div>
    <div class="form-group form-check">
      <input class="form-check-input" type="checkbox" />
      <label class="form-check-label" for="exampleCheck1">
        Sentence for best understanding
      </label>
    </div>
    <div class="form-group form-check">
      <input class="form-check-input" type="checkbox" />
      <label class="form-check-label" for="exampleCheck1">
        Sentence example of usage
      </label>
    </div>
  </div>
);
