import React, { Component } from 'react';
import uwu from './assets/uwu.png';
import './assets/App.css';
import wow from './assets/wow.mp3';
const sound = new Audio(wow);

class App extends Component {

  render() {
    return (
      <div className="App">
        <audio src={wow} autoPlay={false}></audio>
        <img src={uwu} onClick={sound.play()} className="uwu" alt="UwU" />
      </div>
    );
  }
}

export default App;
