import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAppContext } from '../../libs/contextLib';
import './header.scss';

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

  useEffect(() => {
    // console.log('2->', cookies);
  }, []);

  return (
    <div className="wrapper__header">
      <header className="header__container">
        <span className="logo" />
        <h1 className="text__logo">RocketEnglish</h1>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        <nav className="navigation__container">
          <ul className="navigation-links__container">
            {isAuthenticated ? (
              <>
                <li className="navigation__link">
                  <Link className="nav-link" to="/">
                    На главную
                    {/* <span className="">(current)</span> */}
                  </Link>
                </li>
                <li className="navigation__link">
                  <Link className="nav-link" to="/games">
                    Тренировки
                  </Link>
                  {/* <div className="dropdown-menu">
                    {' '}
                    <Link className="dropdown-item" to="/games/speakit">
                      SpeakIt
                    </Link>
                    <Link className="dropdown-item" to="/games/englishPuzzle">
                      English Puzzle
                    </Link>
                    <Link className="dropdown-item" to="/games/savanna">
                      Savanna
                    </Link>
                    <Link className="dropdown-item" to="/games/audioCall">
                      Audio Call
                    </Link>
                    <Link className="dropdown-item" to="/games/sprint">
                      Sprint
                    </Link>
                    <Link className="dropdown-item" to="/games/ourGame">
                      Our Game
                    </Link>
                  </div> */}
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
                <li className="navigation__link">
                  <Link className="nav-link" to="/login">
                    Регистрация
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className="col-md-1">
          <img className="mr-auto mx-auto" src="#" alt="alternative text" />
          <p>User</p>
        </div>
        {/* </div> */}
      </header>
    </div>
  );
};
