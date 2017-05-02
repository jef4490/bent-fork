import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to The Bent Fork</h2>
        </div>
        <p className="App-intro">
          This is where we put some text about the use of just intonation in the Rennaissance and today.
        </p>
      </div>
    );
  }
}

export default App;
