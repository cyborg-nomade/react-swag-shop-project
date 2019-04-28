import React from 'react';
import logo from '../logo.svg';
import './App.css';
import HttpService from '../services/http-service';

const http = new HttpService();

function loadData() {
  http.getProducts().then(products => {
    console.log(products);
  }, err => {

  });
}

function App() {
  loadData();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
