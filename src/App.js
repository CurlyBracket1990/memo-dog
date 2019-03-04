import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import DogImage from './components/DogImage'
import Landing from './components/Landing';

class App extends Component {
 render() {
   return (
     <Provider store={store}>
     <div className="App">
      	<header><h1>Dog memo game</h1></header>
       

       <main>
 	<Landing />
         <DogImage />
       </main>
     </div>
     </Provider>
   );
 }
}

export default App;
