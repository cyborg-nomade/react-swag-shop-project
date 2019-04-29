import React from 'react';
import logo from '../logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product.js';

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
      </header>
      <div className="App-main">
        <Product />
      </div>
    </div>

  );
}

export default App;
