import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie';
import { Header } from './components/header/Header';
import { Settings } from './components/settings/Settings';
import { Card } from './components/card/Card';
import { Authorization } from './components/authorization/Authorization';
import { Vocabulary } from './components/vocabulary/Vocabulary';

function App() {
  const [cookies, setCookies] = useCookies(['authState']);
  if (!Object.keys(cookies).length) {
    setCookies('authState', { isLoggedIn: false, user: {} });
  }
  const { isLoggedIn } = cookies.authState;

  return (
    <CookiesProvider>
      <Router>
        <div className="App">
          <Switch>
            {!isLoggedIn && (
              <>
                <Route exact path="/">
                  <Header />
                  <Authorization />
                </Route>
                <Redirect to="/" />
              </>
            )}
            {isLoggedIn && (
              <>
                <Route path="/settings">
                  <Settings />
                </Route>
                <Route path="/main">
                  <Header />
                  <Card />
                </Route>
                <Route path="/vocabulary">
                  <Vocabulary />
                </Route>
                <Redirect to="/main" />
              </>
            )}
          </Switch>
        </div>
      </Router>
    </CookiesProvider>
  );
}

export default App;
