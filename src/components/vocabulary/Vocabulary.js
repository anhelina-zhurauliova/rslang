import React from 'react';

export const Vocabulary = () => (
  <ul className="list-group list-group-flush">
    <li className="list-group-item d-flex align-items-center">
      <input className="mr-3" type="checkbox" checked="" />
      <button className="btn" type="button">
        <img className="mr-3" height="30" src="./assets/img/megaphone.svg" alt="Speak it" />
      </button>
      <div className="words-container">
        <h5 className="text-primary mb-0">commitment</h5>
        <p>обязательство</p>
        <h6 className="mb-o">Do you know your commitments?</h6>
        <p className="text-secondary mb-0">Давность: 11 часов назад | Повторений: 6</p>
      </div>
    </li>
  </ul>
);
