import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PageHomepage from './Homepage/Homepage';

function Root() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={PageHomepage} />
      </Switch>
    </Router>
    </>
  );
}

export default Root;
