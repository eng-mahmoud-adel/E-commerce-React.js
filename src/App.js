import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './pages/products/Products';
const Cart = lazy(() => import('./pages/cart/Cart'));
const SingleProduct = lazy(() => import('./pages/products/SingleProduct'));

// import './App.css';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/product/:id" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />

        <Route>
          <Redirect to="/" />
        </Route>
    </Switch>
  );
}

export default App;
