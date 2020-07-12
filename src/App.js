import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { AppContext } from './libs/contextLib';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Settings } from './components/settings/Settings';
import { Card } from './components/card/Card';
import { Authorization } from './components/authorization/Authorization';
import { Registration } from './components/authorization/Registration';
import { Vocabulary } from './components/vocabulary/Vocabulary';
import { Savanna } from './games/savanna/savanna';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <CookiesProvider>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Router>
          <div className="App">
            {/* <Header /> */}
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
              <Route path="/savanna">
                <Savanna />
              </Route>
            </Switch>
          </div>
        </Router>
      </AppContext.Provider>
    </CookiesProvider>
  );
}

export default App;
