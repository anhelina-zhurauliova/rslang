/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-info">Команда разработчиков</p>
      <div className="team-mate__container">
        <a href="https://github.com/anhelina-zhurauliova" className="team-mate anhelina" />
        <a href="https://github.com/olakostenok" className="team-mate olga" />
        <a href="https://github.com/kastrubait" className="team-mate tanya" />
        <a href="https://github.com/ars6300" className="team-mate arslan" />
        <a href="https://github.com/Artierm" className="team-mate artiem" />
        <a href="https://github.com/ilyayudovin" className="team-mate ilya" />
      </div>
    </footer>
  );
};
