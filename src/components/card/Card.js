import React from 'react';

export const Card = () => (
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="row justify-content-center align-items-center">
        <button className="col h2" type="button">
          prev
        </button>
      </div>
      <div className="card col-8">
        <div className="h3">
          <p>
            I
            <input type="text" value="run" />
            every morning.
          </p>
          <hr />
          <p className="h5">Я бегаю каждое утро.</p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <button className="col h2" type="button">
          next
        </button>
      </div>
    </div>
    <div className="container">
      <p className="row justify-content-center h2">бежать, бегать</p>
    </div>
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <span>17</span>
        <progress id="progress" value="17" max="50" />
        <span>50</span>
      </div>
    </div>
    <div className="container card">
      <img className="img-fluid rounded" alt="run" />
      <div className="card-body">
        <p>|rʌn|</p>
        <img width="40" height="40" alt="audio" />
      </div>
    </div>
  </div>
);
