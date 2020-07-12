import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer-info">Команда разработчиков</p>
        <div className="team-mate__container">
          <span className="team-mate" />
          <span className="team-mate" />
          <span className="team-mate" />
          <span className="team-mate" />
          <span className="team-mate" />
          <span className="team-mate" />
        </div>
      </div>
    </footer>
  );
};
