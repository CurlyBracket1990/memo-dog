import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import DogImage from './components/DogImage'

class App extends Component {
 render() {
   return (
     <Provider store={store}>
     <div className="App">
       <header className="App-header">

       </header>
       <main>
         <DogImage />
       </main>
     </div>
     </Provider>
   );
 }
}

export default App;