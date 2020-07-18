/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie';
import { AppContext } from './libs/contextLib';
import { onError } from './libs/errorLib';
import { Header } from './components/header/Header';
import { Settings } from './components/settings/Settings';
import { Home } from './components/home/Home';
import { Authorization } from './components/authorization/Authorization';
import { Registration } from './components/authorization/Registration';
import { Vocabulary } from './components/vocabulary/Vocabulary';
import { Speakit } from './games/speakIt/App';
import { AudioCall } from './games/audiocall/AudioCall';
import { PrivateRoute } from './components/authorization/PrivateRoute';
import { Footer } from './components/footer/footer';
import { BaseGame } from './base-game/BaseGame';
import { TeamPage } from './components/teamPage/teamPage';
import { Sprint } from './games/sprint/src/Sprint';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true); // сессия пользователя
  const [cookies, setCookies] = useCookies(['authState']);
  useEffect(() => {
    try {
      if (!Object.keys(cookies).length) {
        setCookies('authState', { isLoggedIn: false, user: {} });
      }
      const { isLoggedIn } = cookies.authState;
      if (isLoggedIn) {
        userHasAuthenticated(true);
      }
    } catch (e) {
      onError(e.message);
    }
    setIsAuthenticating(false);
  }, []);

  return (
    !isAuthenticating && (
      <CookiesProvider>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Router>
            <div className="App">
              <Route path="/signin">
                <Header />
                <Authorization />
                <Footer />
              </Route>
              <Route exact path="/teampage">
                <Header />
                <TeamPage />
                <Footer />
              </Route>
              <Route exact path="/games">
                <Header />
                <Home />
                <Footer />
              </Route>
              <Route exact path="/login">
                <Header />
                <Registration />
                <Footer />
              </Route>
              <PrivateRoute exact path="/vocabulary">
                <Header />
                <Vocabulary />
                <Footer />
              </PrivateRoute>
              <PrivateRoute exact path="/settings">
                <Header />
                <Settings />
                <Footer />
              </PrivateRoute>
              <Route exact path="/games/audiocall">
                <AudioCall />
              </Route>
              <Route exact path="/">
                <Header />
                <Registration />
                <Footer />
              </Route>
              <Route exact path="/games/speakIt">
                <Speakit />
              </Route>
              <Route exact path="/games/sprint">
                <Sprint />
              </Route>
              <Route exact path="/games/englishPuzzle">
                {/* <EnglishPuzzle /> */}
              </Route>
              <Route exact path="/games/main">
                <BaseGame />
              </Route>
            </div>
          </Router>
        </AppContext.Provider>
      </CookiesProvider>
    )
  );
}

export default App;
