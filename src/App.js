import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Settings } from './components/settings/Settings';
import { Card } from './components/card/Card';
import { Authorization } from './components/authorization/Authorization';
import { Vocabulary } from './components/vocabulary/Vocabulary';

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
            <Settings />
          </Route>
          <Route path="/main">
            <Header />
            <Card />
          </Route>
          <Route path="/vocabulary">
            <Vocabulary />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
