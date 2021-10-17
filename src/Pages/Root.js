import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import PageHomepage from './Homepage/Homepage';
import PageProduct from './Product/PageProduct';
import PageShoppingCart from './Cart/PageShoppingCart';

function Root() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={PageHomepage} />
        <Route path="/product/:prodId" component={PageProduct} />
        <Route path="/cart" component={PageShoppingCart} />
        <Route path="*"><Redirect to='/'/></Route>
      </Switch>
    </Router>
    </>
  );
}

export default Root;
