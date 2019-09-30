import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function Products(props) {
  const { match } = props;
  return (
    <Router>
      <Route path={`${match.path}/`} exact component={ProductList}></Route>
      <Route path={`${match.path}/create`} component={ProductForm}></Route>
      <Route
        path={`${match.path}/:code/edit`}
        render={props => <ProductForm {...props} isEdit={true} />}
      ></Route>
    </Router>
  );
}

export default Products;
