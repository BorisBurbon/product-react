import React, {Component} from 'react';

import Product from "../product";

import '../../components/productsList/style.css';

export default class ProductsList extends Component {

  render() {
    const products = this.props.collection;
    return (
      <section className="products">
        <ul className="cb-slideshow">
          <li><span>Image 01</span></li>
          <li><span>Image 02</span></li>
          <li><span>Image 03</span></li>
        </ul>
        <div className="products__container">
          <h2 className="products-title">Products catalog</h2>
          {
            products.map((elem) =>
              <Product key={elem.id} data={elem}/>
            )
          }
        </div>
      </section>
    )
  }
}
