import { combineReducers } from 'redux';
import productsReducer from './products';
import commentsReducer from './comments';
import userReducer from './user';


export default combineReducers({
    products: productsReducer,
    comments: commentsReducer,
    user: userReducer
})
