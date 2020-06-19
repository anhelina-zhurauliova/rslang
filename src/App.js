import React from 'react';
import './App.scss';
import { Header } from './components/header/header';
import { Notification } from './components/notification/notification';
import { Settings } from './components/settings/settings';
import { Card } from './components/card/card';
import { Authorization } from './components/authorization/authorization';
import { Vocabulary } from './components/vocabulary/vocabulary';

function App() {
  return (
    <div className="App">
      <Header />
      <Notification />
      <Settings />
      <Card />
      <Authorization />
      <Vocabulary />
    </div>
  );
}

export default App;
