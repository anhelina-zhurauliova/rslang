import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './home.scss';

export const Card = props => {
  const { id, title, screenshot, description, link } = props;

  return (
    <div key={id} className="game_card__container">    
      <div className="info__container">
      <img className="game__screenshot" src={screenshot} alt={title} />
        <h4 className="game__title">{title}</h4>
        <Link className="card-link" to={link}>
          START GAME
        </Link>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  screenshot: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};
