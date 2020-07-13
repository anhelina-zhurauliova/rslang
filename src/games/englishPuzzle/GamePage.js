/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useAppContext } from '../../libs/contextLib';
import { Hints } from './Hints';
import { SetLevel } from './SetLevel';

const GamePage = () => {
  // eslint-disable-next-line no-unused-vars
  const { puzzle, setPuzzle } = useAppContext();
  // console.log(puzzle.settingsPuzzle);
  // const [game, setGame] = useState();
  // const [hints, setHints] = useState({
  //   isTranslation: true,
  //   isPronounce: true,
  //   isAutoListening: true,
  //   isBacground: false,
  //   isAmend: true,
  // });
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['authState']);

  useEffect(() => {
    const { isLoggedIn } = cookies.authState;
    if (isLoggedIn) {
      // eslint-disable-next-line no-unused-vars
      const { user } = cookies.authState;
      // console.log(user.userId, user.token);
    }
  }, []);

  return (
    <div className="game container p-1 my-1 border">
      <div className="userSetting row justify-content-center">
        <SetLevel />
        <Hints />
      </div>
      <div className="row justify-content-center">
        <div className="sentence border">
          <p>field #1</p>
        </div>
        <div className="sentence border">
          <p>field #2</p>
        </div>
        <div className="sentence border">
          <p>field #3</p>
        </div>
        <div className="sentence border">
          <p>field #4</p>
        </div>
        <div className="sentence border">
          <p>field #5</p>
        </div>
        <div className="sentence border">
          <p>field #6</p>
        </div>
        <div className="sentence border">
          <p>field #7</p>
        </div>
        <div className="sentence border">
          <p>field #8</p>
        </div>
        <div className="sentence border">
          <p>field #9</p>
        </div>
        <div className="sentence border">
          <p>field #10</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="sentence mt-3 mb-3 border">
          <p>Words area</p>
        </div>
      </div>
      <div className="ml-auto text-center mt-3 mb-3">
        <button type="button" className="btn-game btn btn-secondary d-inlineblock mr-2 mx-auto">
          I don&rsquo;t know
        </button>
        <button type="button" className="btn-game btn btn-secondary d-inlineblock mx-auto">
          Check
        </button>
      </div>
    </div>
  );
};

export { GamePage };
