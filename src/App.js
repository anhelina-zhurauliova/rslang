import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Settings } from './components/settings/Settings';
import { Authorization } from './components/authorization/Authorization';
import { Vocabulary } from './components/vocabulary/Vocabulary';
import { BaseGame } from './base-game/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Authorization />
          </Route>
          <Route path="/settings">
            <Header />
            <Settings />
          </Route>
          <Route path="/main">
            <Header />
            <BaseGame />
          </Route>
          <Route path="/vocabulary">
            <Header />
            <Vocabulary />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
