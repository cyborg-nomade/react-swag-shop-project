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
      <div className="container App-main">
        <div className="row">
          <Product className="col-sm-4" price="4.23" title="Stupid Title" imgURL="https://previews.123rf.com/images/vectorzilla/vectorzilla0801/vectorzilla080100009/2479192-cute-pink-elephant-vector-illustration.jpg" />
          <Product className="col-sm-4" price="4.23" title="Stupid Title" imgURL="https://previews.123rf.com/images/vectorzilla/vectorzilla0801/vectorzilla080100009/2479192-cute-pink-elephant-vector-illustration.jpg" />
          <Product className="col-sm-4" price="4.23" title="Stupid Title" imgURL="https://previews.123rf.com/images/vectorzilla/vectorzilla0801/vectorzilla080100009/2479192-cute-pink-elephant-vector-illustration.jpg" />
          <Product className="col-sm-4" price="4.23" title="Stupid Title" imgURL="https://previews.123rf.com/images/vectorzilla/vectorzilla0801/vectorzilla080100009/2479192-cute-pink-elephant-vector-illustration.jpg" />
          <Product className="col-sm-4" price="4.23" title="Stupid Title" imgURL="https://previews.123rf.com/images/vectorzilla/vectorzilla0801/vectorzilla080100009/2479192-cute-pink-elephant-vector-illustration.jpg" />
        </div>
      </div>
    </div>

  );
}

export default App;
