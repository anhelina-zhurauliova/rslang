import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie';
import { AppContext } from './libs/contextLib';
import { Header } from './components/header/Header';
import { Settings } from './components/settings/Settings';
import { Card } from './components/card/Card';
import { Authorization } from './components/authorization/Authorization';
import { Registration } from './components/authorization/Registration';
import { Vocabulary } from './components/vocabulary/Vocabulary';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true); // сессия пользователя
  const [cookies, setCookies] = useCookies(['authState']);

  function onLoad() {
    try {
      if (!Object.keys(cookies).length) {
        setCookies('authState', { isLoggedIn: false, user: {} });
      } else {
        const { isLoggedIn } = cookies.authState;
        if (isLoggedIn) {
          userHasAuthenticated(true);
        }
      }
    } catch (e) {
      // console.log(e);
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
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/settings">
                  <Settings />
                </Route>
                <Route path="/signin">
                  <Authorization />
                </Route>
                <Route path="/login">
                  <Registration />
                </Route>
                <Route path="/main">
                  <Card />
                </Route>
                <Route path="/vocabulary">
                  <Vocabulary />
                </Route>
              </Switch>
            </div>
          </Router>
        </AppContext.Provider>
      </CookiesProvider>
    )
  );
}

export default App;
