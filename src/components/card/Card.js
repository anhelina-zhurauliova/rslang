import React from 'react';

export const Card = () => (
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="row justify-content-center align-items-center">
        <button class="col h2" type="button">
          prev
        </button>
      </div>
      <div class="card col-8">
        <div class="h3">
          <p>
            I<input type="text" value="run" />
            every morning.
          </p>
          <hr />
          <p class="h5">Я бегаю каждое утро.</p>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <button class="col h2" type="button">
          next
        </button>
      </div>
    </div>
    <div class="container">
      <p class="row justify-content-center h2">бежать, бегать</p>
    </div>
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <span>17</span>
        <progress id="progress" value="17" max="50"></progress>
        <span>50</span>
      </div>
    </div>
    <div class="container card">
      <img class="img-fluid rounded" alt="run" />
      <div class="card-body">
        <p>|rʌn|</p>
        <img width="40" height="40" alt="audio" />
      </div>
    </div>
  </div>
);
