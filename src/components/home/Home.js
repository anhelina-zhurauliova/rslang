import React from 'react';
import { Games } from './works';
import { Card } from './Card';
import './home.scss';

export const Home = () => {
  return (
    <div className="home__content">
      <div className="card-deck">
        {Games.map(game => (
          <Card
            key={game.id}
            title={game.title}
            screenshot={game.screenshot}
            description={game.description}
            link={game.link}
          />
        ))}
      </div>
    </div>
  );
};
