import React, { useState, Fragment } from "react";
import clsx from "clsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Material
import { CssBaseline, Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Components
import MyDrawer from "../Drawer/MyDrawer";
import AppBar from "../Appbar/AppBar";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Copyright from "../Copyright";

import Products from "../Products/Products";
import Customers from "../Customers/Customers";
import Transactions from "../Transactions/Transactions";
import Chats from "../Chats/Chats";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const { match } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen} />

      <MyDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        match={match}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Route path={`${match.path}/dashboard`} component={DashboardContent} />
        <Route path={`${match.path}/products`} component={Products} />
        <Route path={`${match.path}/customers`} component={Customers} />
        <Route path={`${match.path}/transactions`} component={Transactions} />
        <Route path={`${match.path}/chats`} component={Chats} />
      </main>
    </div>
  );
}

function DashboardContent() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Fragment>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Copyright />
    </Fragment>
  );
}
