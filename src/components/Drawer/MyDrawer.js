import React from "react";
import clsx from "clsx";

// Material
import { Drawer, Divider, List, IconButton } from "@material-ui/core";
import Navigation from "./Navigation";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyle = makeStyles(theme => ({
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  }
}));

export default function MyDrawer(props) {
  const classes = useStyle();

  const { open, handleDrawerClose } = props;
  const { match } = props;

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List>
        <Navigation match={match} />
      </List>
    </Drawer>
  );
}
