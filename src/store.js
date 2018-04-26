import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import axios from 'axios';
import api from './api';

import reducer from './reducers';

import saveLoginLocally, { getUserFromStorage } from './middlewares/saveLoginLocally';

const middleware = applyMiddleware( thunk, promise(), saveLoginLocally, logger());

let defaultStore = {};
const user = getUserFromStorage();

if (user) defaultStore.user = user;

const store = createStore(reducer, defaultStore, middleware);

// TODO: replace somewhere fetch products
store.dispatch({
    type: "PRODUCTS",
    payload: axios.get(api.products)
})

export default store;
