import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../components/card/Card';

export const CardList = props => {
  return props.words.map((word, i) => <Card сardNumber={i} words={props.words} key={word.id} />);
};
CardList.propTypes = {
  сardNumber: PropTypes.number,
  words: PropTypes.array,
};
