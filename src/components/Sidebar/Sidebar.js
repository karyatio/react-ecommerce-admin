import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(props) {
  const { match } = props;

  return (
    <div className="bg-light border-right" className="sidebar-wrapper">
      <div className="sidebar-heading">Admin Page </div>
      <div className="list-group list-group-flush">
        <Link
          to={`${match.url}/dashboard`}
          className="list-group-item list-group-item-action bg-light"
        >
          Dashboard
        </Link>
        <Link
          to={`${match.url}/products`}
          className="list-group-item list-group-item-action bg-light"
        >
          Produk
        </Link>

        <Link
          to={`${match.url}/transaction`}
          className="list-group-item list-group-item-action bg-light"
        >
          Transaction
        </Link>

        <Link
          to={`${match.url}/customer`}
          className="list-group-item list-group-item-action bg-light"
        >
          Customer
        </Link>

        <Link
          to={`${match.url}/chat`}
          className="list-group-item list-group-item-action bg-light"
        >
          Chat
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
