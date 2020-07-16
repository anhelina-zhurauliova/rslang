import './teamPage.css';
import React from 'react';
import cosmoperson from './images/cosmo-person.png';

export function TeamPage() {
  return (
    <div className="container">
      <svg viewBox="0 0 960 150">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            КОМАНДА
          </text>
        </symbol>
        <g className="g-ants">
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
        </g>
      </svg>
      <div className="person-card">
        <div className="person-photo">
          <img className="astronaut" src={cosmoperson} />
        </div>
        <div className="person-info">
          <div className="person-name">
            <b>АНГЕЛИНА</b>
          </div>
          <div className="person-contribution">
            <ul className="ckeck-list">
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Занималась настройкой проекта
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Организовывала работу команды
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Занималась организацией созвонов
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Распределяла задачи между участниками
                команды
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Делала ревью кода
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Занималась созданием страницы с играми
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Разработала базовую игру
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Сделала header и footer
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="person-card">
        <div className="person-info">
          <div className="person-name-even">
            <b>ОЛЯ</b>
          </div>
          <div className="person-contribution-even">
            <ul className="ckeck-list">
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Сделала макет в Figma
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Внесла все базовые стили
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Придумала идею для дизайна
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Написала эту страницу
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Написала таймер
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Разработала игру Rocket Resque
              </li>
            </ul>
          </div>
        </div>
        <div className="person-photo">
          <img className="astronaut-even" src={cosmoperson} />
        </div>
      </div>
      <div className="person-card">
        <div className="person-photo">
          <img className="astronaut" src={cosmoperson} />
        </div>
        <div className="person-info">
          <div className="person-name">
            <b>ТАНЯ</b>
          </div>
          <div className="person-contribution">
            <ul className="ckeck-list">
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Сделала авторизацию на сайте
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Занималась написанием игры Chaos
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Помогала с настройками роутинга
              </li>
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Создала privateRoutes
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="person-card">
        <div className="person-info">
          <div className="person-name-even">
            <b>АРСЛАН</b>
          </div>
          <div className="person-contribution-even">
            <ul className="ckeck-list">
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Занимался написанием игры Audiocall
              </li>
            </ul>
          </div>
        </div>
        <div className="person-photo">
          <img className="astronaut-even" src={cosmoperson} />
        </div>
      </div>
      <div className="person-card">
        <div className="person-photo">
          <img className="astronaut" src={cosmoperson} />
        </div>
        <div className="person-info">
          <div className="person-name">
            <b>ИЛЬЯ</b>
          </div>
          <div className="person-contribution">
            <ul className="ckeck-list">
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Занимался написанием игры Astronaut's
                speech
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="person-card">
        <div className="person-info">
          <div className="person-name-even">
            <b>АРТЕМ</b>
          </div>
          <div className="person-contribution-even">
            <ul className="ckeck-list">
              <li className="ckeck-point">
                <span className="symbol-color">&#9733;</span> Занимался написанием игры Cosmic
                Velocity
              </li>
            </ul>
          </div>
        </div>
        <div className="person-photo">
          <img className="astronaut-even" src={cosmoperson} />
        </div>
      </div>
    </div>
  );
}
