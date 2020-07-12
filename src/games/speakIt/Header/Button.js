import React from 'react';

const myStyle = {
  position: 'relative',
  width: 100,
  padding: '10px 0',
  textAlign: 'center',
  margin: '0 20px',
  cursor: 'pointer'
};
const activeLink = {
  borderBottom: '2px solid rgb(229,180,225)'
};


const Button = ({value, setWords,isActive,setIsActive,id,setIsRefresh,setIsClicked,setAnswered}) => {

  let styles;

  const getWords = async (group, page) => {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${group}&page=${page}`;
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
    localStorage.setItem('words',JSON.stringify(json));
    localStorage.setItem('level',group);
    setWords(json.splice(0,10));
    setIsActive(id);
    setIsRefresh(true);
    setIsClicked(0);
    setAnswered([])
  };

  if(isActive === id){
    styles = Object.assign({},myStyle,activeLink);
  }
  else{
    styles = myStyle;
  }

  return (
    <div style={styles} onClick={() => getWords(value.substring(6,7)-1, Math.floor(Math.random() * Math.floor(29)))}>{value}</div>
  );
};

export default Button;
