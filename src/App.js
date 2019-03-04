import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header><h1>Dog memo game</h1></header>
        <Landing />
      </div>
    );
  }
}

export default App;
