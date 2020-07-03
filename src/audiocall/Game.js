/* eslint-disable max-len */
import React from 'react';
import { ReactComponent as Megaphone } from '../assets/svg/megaphone.svg';

export const Game = () => {
  return (
    <div className="audiocall__content col-lg-8 col-md-10 container d-flex justify-content-center flex-column">
      <div className="audiocall__hint d-flex justify-content-center">
        <button type="button" className="audiocall__voice-btn col-md-3 btn">
          <Megaphone className="audiocall__icon" />
        </button>
      </div>
      <ol className="audiocall__list row">
        <li className="audiocall__list-item word">
          <button type="button" className="word__btn btn">
            курица
          </button>
        </li>
        <li className="audiocall__list-item word">
          <button type="button" className="word__btn btn">
            some
          </button>
        </li>
        <li className="audiocall__list-item word">
          <button type="button" className="word__btn btn">
            some
          </button>
        </li>
        <li className="audiocall__list-item word">
          <button type="button" className="word__btn btn">
            some
          </button>
        </li>
        <li className="audiocall__list-item word">
          <button type="button" className="word__btn btn">
            some
          </button>
        </li>
      </ol>
      <button className="audiocall__btn-skip btn" type="button">
        не знаю
      </button>
    </div>
  );
};
