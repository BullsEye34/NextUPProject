import React from 'react';
import logo from './logo.svg';
import './App.css';
import mainBackground from './assets/mainBackground.png';

function App() {
  return (
    <div className="App">
      <header className="background">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <img src={mainBackground}></img>
      </header>
    </div>
  );
}

export default App;
