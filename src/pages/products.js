import React, {Component} from 'react';
import {connect} from 'react-redux';

//import Nav from '../components/nav';
import ProductsList from '../components/productsList';


class App extends Component {


  showStatus(pending, error) {
    if (pending) {
      return ("Status: waiting for response")
    }
    if (error) {
      return (`Status: error. ${ error }`)
    }
  }

  render() {
    const props = this.props;

    return (
      <div>
        { this.showStatus(props.pending, props.error) }
        <ProductsList collection={props.products}/>
      </div>
    );
  }
}

function select(state) {
  return state.products
}

export default connect(select)(App);
