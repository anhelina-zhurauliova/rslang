import React from 'react';

export const Header = () => (
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="#" alt="none" />
      <a class="navbar-brand" href="#">
        WebSiteName
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Games
            </a>
            <div class="dropdown-menu">
              {' '}
              <a class="dropdown-item" href="#">
                Speakit
              </a>
              <a class="dropdown-item" href="#">
                English Puzzle
              </a>
              <a class="dropdown-item" href="#">
                Savanna
              </a>
              <a class="dropdown-item" href="#">
                Audio Call
              </a>
              <a class="dropdown-item" href="#">
                Sprint
              </a>
              <a class="dropdown-item" href="#">
                Our Game
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Our Team
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Settings
            </a>
          </li>
        </ul>
        <div class="col-md-1">
          <img class="mr-auto mx-auto" src="#" />
          <p>User</p>
        </div>
      </div>
    </nav>
  </div>
);
