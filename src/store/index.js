import {combineReducers , createStore , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import cartReducer from './cartReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import thunk from './middleware/thunk';


let reducer = {
  cart:cartReducer,
  categories:categoryReducer,
  products:productReducer,
}

const store = () => createStore(combineReducers(reducer), composeWithDevTools(applyMiddleware(thunk)));

export default store();
