import React from 'react';
import {myStyle} from "../../WordsList/Word";

const Results = ({setShowStatistics}) => {

  const handleClick = () => {
    setShowStatistics(true);
  };

  return (
      <div style={myStyle} onClick={handleClick}>Results</div>
  );
};

export default Results;
