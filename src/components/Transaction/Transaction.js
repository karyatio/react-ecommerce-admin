import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TransactionList from "./TransactionList";
import TransactionDetail from "./TransactionDetail";

function Transaction(props) {
  const { match } = props;

  console.log(match.path);
  return (
    <Router>
      <Route path={`${match.path}/`} exact component={TransactionList}></Route>
      <Route path={`${match.path}/:id`} component={TransactionDetail}></Route>
    </Router>
  );
}

export default Transaction;
