import React from 'react';
import PropTypes from 'prop-types';
import './home.scss';

export const Card = props => {
  const { id, title, screenshot, description, link } = props;

  return (
    <div key={id} className="card text-center">
      <img className="game__screenshot card-img-top" src={screenshot} alt={title} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-body">
        <a href={link} className="card-link">
          Go
        </a>
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
