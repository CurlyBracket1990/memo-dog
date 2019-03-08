import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import Landing from './components/Landing';
import {Route} from 'react-router-dom'
import GameContainer from './components/GameContainer';
import EndGame from './components/EndGame';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header><h1>Guess the breed game!</h1></header>

          <main>
          <Route exact path="/" component={Landing} />
          <Route exact path="/game" component={GameContainer} />
          <Route exact path="/end" component={EndGame} />
          </main>
        </div>
     </Provider>
   );
 }
}

export default App;
