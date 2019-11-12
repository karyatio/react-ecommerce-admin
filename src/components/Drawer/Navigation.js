import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";

export default function Navigation(props) {
  const { match } = props;

  return (
    <div>
      {/* <ListItem button component={Link} to={`${match.url}/dashboard`}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem> */}

      <ListItem button component={Link} to={`${match.url}/products`}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>

      <ListItem button component={Link} to={`${match.url}/transactions`}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItem>

      <ListItem button component={Link} to={`${match.url}/customers`}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>

      {/* <ListItem button component={Link} to={`${match.url}/chats`}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItem> */}
    </div>
  );
}
