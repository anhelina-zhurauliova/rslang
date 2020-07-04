/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAppContext } from '../../libs/contextLib';

export const Header = () => {
  const { isAuthenticated, userHasAuthenticated } = useAppContext();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['authState']);
  const history = useHistory();

  function handleLogout() {
    setCookies('authState', { isLoggedIn: false, user: {} });
    history.push('/');
    userHasAuthenticated(false);
  }

  useEffect(() => {}, []);

  return (
    <div className="wrapper__header">
      <header className="header__container">
        <span className="logo" />
        <h1 className="text__logo">RocketEnglish</h1>
        <nav className="navigation__container">
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
                  <Link className="nav-link" to="/ourTeam">
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
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Регистрация
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="col-md-1">
            <img className="mr-auto mx-auto" src="#" alt="alternative text" />
            <p>User</p>
          </div>
        </div>
      </nav>
    </div>
  );
};
