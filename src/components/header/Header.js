/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import classNames from 'classnames';
import { useAppContext } from '../../libs/contextLib';

import './header.scss';

export const Header = () => {
  const { isAuthenticated, userHasAuthenticated } = useAppContext();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['authState']);
  const [isClicked, setIsCliked] = useState(false);
  const history = useHistory();

  function handleLogout() {
    setCookies('authState', { isLoggedIn: false, user: {} });
    history.push('/');
    userHasAuthenticated(false);
  }
  useEffect(() => {}, []);

  const onMenuClickHandler = () => {
    if (isClicked) {
      setIsCliked(false);
    } else {
      setIsCliked(true);
    }
  };
  const navContainerClass = classNames({
    navigation__container: true,
    hidden__navigation__container: !isClicked,
  });
  const burgerClass = classNames({
    burger__container: true,
    pushed: isClicked,
  });

  return (
    <div className="wrapper__header">
      <header className="header__container">
        <span className="logo" />
        <h1 className="header__text__logo">RocketEnglish</h1>
        <nav className={navContainerClass}>
          <ul className="navigation-links__container">
            {isAuthenticated ? (
              <>
                <li className="navigation__link">
                  <Link className="nav-link" to="/">
                    На главную
                  </Link>
                </li>
                <li className="navigation__link">
                  <Link className="nav-link" to="/games">
                    Тренировки
                  </Link>
                </li>
                <li className="navigation__link">
                  <Link className="nav-link" to="/teampage">
                    Наша команда
                  </Link>
                </li>
                <li className="navigation__link">
                  <Link className="nav-link" to="/vocabulary">
                    Словарь
                  </Link>
                </li>
                <li className="navigation__link">
                  <Link className="nav-link" to="/settings">
                    Настройки
                  </Link>
                </li>
                <li className="navigation__link">
                  <Link className="" onClick={handleLogout} to="/">
                    Выход
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="navigation__link">
                  <Link className="nav-link" to="/signin">
                    Вход
                  </Link>
                </li>
                <li className="navigation__link">
                  <Link className="nav-link" to="/login">
                    Регистрация
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className={burgerClass}>
          <div className="toggle-icon" onClick={onMenuClickHandler}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </div>
      </header>
    </div>
  );
};
