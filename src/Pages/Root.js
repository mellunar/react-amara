import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PageHomepage from './Homepage/Homepage';
import PageProduct from './Product/PageProduct';

function Root() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={PageHomepage} />
        <Route path="/product/:prodId" component={PageProduct} />
      </Switch>
    </Router>
    </>
  );
}

export default Root;
