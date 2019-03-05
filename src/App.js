import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import Landing from './components/Landing';
import {Route} from 'react-router-dom'
import GameContainer from './components/GameContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header><h1>Dog memo game</h1></header>

          <main>
          <Route exact path="/" component={Landing} />
          <Route exact path="/game" component={GameContainer} />
          </main>
        </div>
     </Provider>
   );
 }
}

export default App;
