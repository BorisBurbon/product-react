// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store from './store';

import Layout from './pages/layout';

import ProductsPage from './pages/products';
import ProductPage from './pages/product';
import LogInPage from './pages/login';
import NotFound from './pages/notFound'
import registerServiceWorker from './registerServiceWorker';

import'./style.css';

let appElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" name="products" component={Layout}>
        <IndexRoute component={ProductsPage} />
        <Route path="products/:product" name="products" component={ProductPage} />
        <Route path="login" name="login" component={LogInPage} />

        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  appElement
);
registerServiceWorker();