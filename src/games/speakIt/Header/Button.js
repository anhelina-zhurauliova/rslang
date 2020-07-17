/* eslint react/prop-types: 0 */
/* eslint-disable */

import React from 'react';
import Media, { useMedia } from 'react-media';

const myStyle = {
  position: 'relative',
  width: 100,
  padding: '10px 0',
  textAlign: 'center',
  margin: '0 20px',
  cursor: 'pointer',
};
const activeLink = {
  borderBottom: '2px solid rgb(229,180,225)',
};

const GLOBAL_MEDIA_QUERIES = {
  small: "(max-width: 599px)",
  medium: "(min-width: 600px) and (max-width: 1199px)",
  large: "(min-width: 1200px)"
};


const Button = ({
  value,
  setWords,
  isActive,
  setIsActive,
  id,
  setIsRefresh,
  setIsClicked,
  setAnswered,
}) => {

  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  let styles;
  let text;
  const getWords = async (group, page) => {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${group}&page=${page}`;
    const res = await fetch(url);
    const json = await res.json();
    localStorage.setItem('words', JSON.stringify(json));
    localStorage.setItem('level', group);
    setWords(json.splice(0, 10));
    setIsActive(id);
    setIsRefresh(true);
    setIsClicked(0);
    setAnswered([]);
  };

  if (isActive === id) {
    styles = { ...myStyle, ...activeLink };
  } else {
    styles = myStyle;
  }

  return (
    <div
      role="presentation"
      style={styles}
      onClick={() =>
        getWords(value.substring(6, 7) - 1, Math.floor(Math.random() * Math.floor(29)))}
    >
      {text = matches.small ? id : value}
    </div>
  );
};

export default Button;
