/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import { Home } from './components/home/Home';
import { Footer } from './components/footer/footer';
import { BaseGame } from './base-game/index';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true); // сессия пользователя
  const [cookies, setCookies] = useCookies(['authState']);

  function onLoad() {
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
  }

  useEffect(() => {
    onLoad();
  }, []);

  return (
    !isAuthenticating && (
      <CookiesProvider>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Router>
            <div className="App">
              <Header />
              <div className="main__wrapper">
                <Switch>
                  <Route path="/signin">
                    <Authorization />
                  </Route>
                  <Route path="/login">
                    <Registration />
                  </Route>
                  <PrivateRoute path="/vocabulary">
                    <Vocabulary />
                  </PrivateRoute>
                  <PrivateRoute path="/settings">
                    <Settings />
                  </PrivateRoute>
                  <PrivateRoute path="/audiocall">
                    <AudioCall />
                  </PrivateRoute>
                  <Route path="/">{/* <Promo /> */}</Route>
                  <PrivateRoute path="/games/speakIt">
                    <Speakit />
                  </PrivateRoute>
                  <PrivateRoute path="/games">
                    <Home />
                  </PrivateRoute>
                  <PrivateRoute path="/games/main">
                    <BaseGame />
                  </PrivateRoute>
                  <PrivateRoute path="/games/englishPuzzle">{/* <EnglishPuzzle /> */}</PrivateRoute>
                </Switch>
              </div>
              <Footer />
            </div>
          </Router>
        </AppContext.Provider>
      </CookiesProvider>
    )
  );
}

export default App;
