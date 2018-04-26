import React, {Component} from 'react';
import {Link} from 'react-router';

import '../../components/product/style.css';

import api from '../../api';

export default class Product extends Component {

  render() {
    const data = this.props.data;
    const additionalClass = this.props.full ? 'product-info' : '';
    return (
      <Link to={`products/${ this.props.data.id }`} className={`product-link ${additionalClass}`}>
        <div className={ `product ${additionalClass}` }>
          <div className="product-image">
            <img src={ `${ api.statics }${ data.img }` } alt=""/>
          </div>
          <div className="product-text">
            <div className="product-text-top">
              <h3 className="product-text__title">
                { data.title }
              </h3>
              <div className="product-text__text">
                { data.text }
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
