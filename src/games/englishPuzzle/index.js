import React, { useState } from 'react';
import { AppContext } from '../../libs/contextLib';
import { GamePage } from './GamePage';
import { GameSettings } from './GameSettings';
import './englishpuzzle.scss';

export const EnglishPuzzle = () => {
  const [puzzle, setPuzzle] = useState({ isStarted: false, isSettings: false });

  const howtplHandler = () => {
    setPuzzle({ isSettings: !puzzle.isSettings });
  };

  if (!puzzle.isStarted) {
    return (
      <AppContext.Provider value={{ puzzle, setPuzzle }}>
        <div className="container p-1 my-1">
          <div className="puzzle row justify-content-center">
            <div className="col-12 col-sm-10 col-md-10 align-self-center">
              <h1 className="puzzle__title mb-4">English Puzzle</h1>
              {puzzle.isSettings ? <GameSettings /> : null}
              <div className={puzzle.isSettings ? 'puzzle__content d-none' : 'puzzle__content'}>
                <h5 className="mb-4">
                  Тренировка позволит лучше понимать употребление \n некоторых английских слов.
                  Учите язык самостоятельно, быстро и не скучая!!
                </h5>

                <button
                  type="button"
                  className="puzzle__btn btn-start d-block mx-auto"
                  onClick={() => setPuzzle({ isStarted: true })}
                >
                  Начать
                </button>
                <button
                  type="button"
                  className="puzzle__btn btn-settings d-block mt-1 mx-auto"
                  onClick={howtplHandler}
                >
                  Как играть?
                </button>
              </div>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    );
  }
  return (
    <AppContext.Provider value={{ puzzle, setPuzzle }}>
      <GamePage />
    </AppContext.Provider>
  );
};
