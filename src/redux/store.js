import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { addProductToCartReducer, productsReducer, singleProductReducer, emptyCartReducer } from './reducers/products';


const rootReducer = combineReducers({
    products: productsReducer,
    singleProduct: singleProductReducer,
    addProductToCart: addProductToCartReducer,
    // emptyCart: emptyCartReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;