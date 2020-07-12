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
    <div className="container p-1 my-1 border">
      <div className="userSetting row justify-content-center">
        <SetLevel />
        <Hints />
      </div>
      <div className="ml-auto text-center">
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
