import React from 'react';
import logo from '../logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product.js';

const http = new HttpService();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products:[]};

    //bind functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);
    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(data => {
      self.setState({products: data})
    }, err => {

    });
  }

  productList = () => {
    const list = this.state.products.map((product) =>
          <div className="col-sm-4" keys={product._id}>
            <Product title={product.title} price={product.price} imgUrl={product.imgUrl} />
          </div>
        );
        return (list);
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="container App-main">
            <div className="row">
              {this.productList()}
            </div>
          </div>
        </div>

      );
  }
}

export default App;
