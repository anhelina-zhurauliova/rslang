import React from 'react';

export const Vocabulary = () => (
  <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex align-items-center">
      <input class="mr-3" type="checkbox" checked="" />
      <img class="mr-3" height="25" src="./megaphone.svg" alt="Speak it" />
      <div class="words-container">
        <h5 class="text-primary mb-0">commitment</h5>
        <p>обязательство</p>
        <h6 class="mb-o">Do you know your commitments?</h6>
        <p class="text-secondary mb-0">Давность: 11 часов назад | Повторений: 6</p>
      </div>
    </li>
  </ul>
);
