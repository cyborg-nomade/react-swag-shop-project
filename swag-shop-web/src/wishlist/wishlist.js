import React, {
  Component
} from 'react';

import './wishlist.css';

import ProductCondensed from '../product-condensed/product-condensed';

class WishList extends Component {

  constructor(props) {
    super(props);

    this.state = {wishlist:[
      {
        title:"Bologna Killer",
        price:23.99,
        id:"fjefkjekjwkj"
      },
      {
        title:"foo man chu",
        price:45.55,
        id:"fjefkjekjwkj"
      },
      {
        title:"wtf",
        price:100,
        id:"fjefkjekjwkj"
      }
    ]}
    //Bind functions
    this.createWishList = this.createWishList.bind(this);
  }

  createWishList = () => {
    const list = this.state.wishlist.map((product) =>
      <ProductCondensed product={product} key={product._id} />
    );

    return (list);
  }

  render() {
    return (
      <div className = "card">
        <div className = "card-block">
          <h4 className = "card-title">Wish List</h4>
          <ul className = "list-group">
            {this.createWishList()}
          </ul>
        </div>
      </div>
    );
  }
}

export default WishList;
