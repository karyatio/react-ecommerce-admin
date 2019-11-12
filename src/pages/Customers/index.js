import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CustomerList from "./CustomerList";
import CustomerDetail from "../CustomerDetail";

function Customers(props) {
  const { match } = props;

  return (
    <Router>
      <Route path={`${match.path}/`} exact component={CustomerList}></Route>
      <Route path={`${match.path}/:id`} component={CustomerDetail}></Route>
    </Router>
  );
}

export default Customers;
