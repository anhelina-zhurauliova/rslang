import React from 'react';

export const Notification = () => (
  <div class="card">
    <div class="text-center">
      <button class="close" type="button" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="card-header">Well Done!</div>
      <div class="card-body">
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        </p>
        <a class="btn btn-primary m-1" href="#">
          Settings
        </a>
        <a class="btn btn-primary m-1" href="#">
          Continue
        </a>
      </div>
    </div>
  </div>
);
