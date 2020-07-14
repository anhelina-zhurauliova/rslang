import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-info">Команда разработчиков</p>
      <div className="team-mate__container">
        <span className="team-mate anhelina" />
        <span className="team-mate olga" />
        <span className="team-mate tanya" />
        <span className="team-mate arslan" />
        <span className="team-mate artiem" />
        <span className="team-mate ilya" />
      </div>
    </footer>
  );
};
