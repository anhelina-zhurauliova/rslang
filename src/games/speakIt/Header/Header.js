/* eslint react/prop-types: 0 */

import React, { useState } from 'react';
import Button from './Button';

const myStyle = {
  display: 'flex',
  justifyContent: 'center',
  color: 'rgb(229,180,225)',
};

const Header = ({ setWords, setIsRefresh, setIsClicked, setAnswered }) => {
  const [isActive, setIsActive] = useState(1);

  return (
    <div style={myStyle}>
      <Button
        value="stage 1"
        setAnswered={setAnswered}
        setWords={setWords}
        id={1}
        isActive={isActive}
        setIsActive={setIsActive}
        setIsRefresh={setIsRefresh}
        setIsClicked={setIsClicked}
      />
      <Button
        value="stage 2"
        setAnswered={setAnswered}
        setWords={setWords}
        id={2}
        isActive={isActive}
        setIsActive={setIsActive}
        setIsRefresh={setIsRefresh}
        setIsClicked={setIsClicked}
      />
      <Button
        value="stage 3"
        setAnswered={setAnswered}
        setWords={setWords}
        id={3}
        isActive={isActive}
        setIsActive={setIsActive}
        setIsRefresh={setIsRefresh}
        setIsClicked={setIsClicked}
      />
      <Button
        value="stage 4"
        setAnswered={setAnswered}
        setWords={setWords}
        id={4}
        isActive={isActive}
        setIsActive={setIsActive}
        setIsRefresh={setIsRefresh}
        setIsClicked={setIsClicked}
      />
      <Button
        value="stage 5"
        setAnswered={setAnswered}
        setWords={setWords}
        id={5}
        isActive={isActive}
        setIsActive={setIsActive}
        setIsRefresh={setIsRefresh}
        setIsClicked={setIsClicked}
      />
      <Button
        value="stage 6"
        setAnswered={setAnswered}
        setWords={setWords}
        id={6}
        isActive={isActive}
        setIsActive={setIsActive}
        setIsRefresh={setIsRefresh}
        setIsClicked={setIsClicked}
      />
    </div>
  );
};

export default Header;
