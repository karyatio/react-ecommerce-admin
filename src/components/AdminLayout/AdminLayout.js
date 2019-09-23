import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import "./AdminLayout.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import Products from "../Products/Products";
import Transaction from "../Transaction/Transaction";
import Customer from "../Customer/Customer";
import Chat from "../Chat/Chat";

function AdminLayout(props) {
  const { match } = props;
  return (
    <Fragment>
      <Navbar></Navbar>

      <div className="layout">
        <div className="layout__sidebar">
          <Sidebar match={match}></Sidebar>
        </div>
        <div className="layout__content">
          <Route path={`${match.path}/dashboard`} component={Dashboard} />
          <Route path={`${match.path}/products`} component={Products} />
          <Route path={`${match.path}/transaction`} component={Transaction} />
          <Route path={`${match.path}/customer`} component={Customer} />
          <Route path={`${match.path}/chat`} component={Chat} />
        </div>
      </div>
    </Fragment>
  );
}

export default AdminLayout;
