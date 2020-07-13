import React, { useState, useEffect } from 'react';

export const SetLevel = () => {
  const [game, setGame] = useState({ isStarted: false, isLevel: 1, isPage: 1 });

  const handleGoCanvas = () => {
    setGame({ isStarted: true });
    // console.log('get puzzle', game.isStarted);
  };

  const handleLevelChange = value => {
    setGame({ isLevel: value });
  };

  const handlePageChange = value => {
    setGame({ isPage: value });
  };

  useEffect(() => {
    // console.log('start ', game.isLevel);
  }, []);

  return (
    <div className="col-11 col-sm-7 mb-3">
      <div className="ml-auto text-center">
        <form>
          <div className="btn-group center mr-1">
            <select
              value={game.isLevel}
              onChange={val => {
                handleLevelChange(val.target.value);
              }}
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
              <option value="3">Level 3</option>
              <option value="4">Level 4</option>
              <option value="5">Level 5</option>
              <option value="6">Level 6</option>
            </select>
          </div>
          <div className="btn-group center mr-1">
            <select
              value={game.isPage}
              onChange={val => handlePageChange(val.target.value)}
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <option value="1">Page 1</option>
              <option value="2">Page 2</option>
              <option value="3">Page 3</option>
              <option value="4">Page 4</option>
              <option value="5">Page 5</option>
              <option value="6">Page 6</option>
              <option value="7">Page 7</option>
              <option value="8">Page 8</option>
              <option value="9">Page 9</option>
              <option value="0">Page 10</option>
              <option value="0">Page 10</option>
            </select>
          </div>
          <button type="button" className="btn-game btn btn-secondary" onClick={handleGoCanvas}>
            Старт!
          </button>
        </form>
      </div>
    </div>
  );
};
