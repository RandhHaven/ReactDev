import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <footer>
          <img src={logo} className="App-logo" alt="logo" />
        </footer>
      </div>
    );
  }
}
export default App;