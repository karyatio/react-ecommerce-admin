import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CustomerList from "./CustomerList";

function Customer(props) {
  const { match } = props;

  return (
    <Router>
      <Route path={`${match.path}/`} exact component={CustomerList}></Route>
    </Router>
  );
}

export default Customer;
