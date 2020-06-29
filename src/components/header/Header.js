/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src="#" alt="none" />
      <a className="navbar-brand" href="#">
        WebSiteName
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/main">
              На главную
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              to="/games"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Тренировки
            </Link>
            <div className="dropdown-menu">
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
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ourTeam">
              Наша команда
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/vocabulary">
              Словарь
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/settings">
              Настройки
            </Link>
          </li>
        </ul>
        <div className="col-md-1">
          <img className="mr-auto mx-auto" src="#" alt="alternative text" />
          <p>User</p>
        </div>
      </div>
    </nav>
  </div>
);
