/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

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
            <a className="nav-link" href="#">
              Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Games
            </a>
            <div className="dropdown-menu">
              {' '}
              <a className="dropdown-item" href="#">
                Speakit
              </a>
              <a className="dropdown-item" href="#">
                English Puzzle
              </a>
              <a className="dropdown-item" href="#">
                Savanna
              </a>
              <a className="dropdown-item" href="#">
                Audio Call
              </a>
              <a className="dropdown-item" href="#">
                Sprint
              </a>
              <a className="dropdown-item" href="#">
                Our Game
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Our Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Settings
            </a>
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
