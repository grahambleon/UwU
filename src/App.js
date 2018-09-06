import React, { Component } from 'react';
import uwu from './uwu.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={uwu} className="uwu" alt="UwU" />
      </div>
    );
  }
}

export default App;
