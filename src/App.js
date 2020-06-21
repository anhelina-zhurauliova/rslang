import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { Notification } from './components/notification/Notification';
import { Settings } from './components/settings/Settings';
import { Card } from './components/card/Card';
import { Authorization } from './components/authorization/Authorization';
import { Vocabulary } from './components/vocabulary/Vocabulary';

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
