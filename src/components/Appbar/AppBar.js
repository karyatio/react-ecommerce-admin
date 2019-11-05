import React, { useState } from "react";
import clsx from "clsx";

// Material
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";
import LogoutModal from "../LogoutModal";

export default function AdminAppBar(props) {
  const classes = useStyles();
  const { open, handleDrawerOpen, handleLogout } = props;
  const [modalLogoutOpen, setModalLogout] = useState(false);

  const handleLogoutModalOpen = () => {
    setModalLogout(true);
  };

  const handleLogoutModalClose = () => {
    setModalLogout(false);
  };

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Dashboard
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handleLogoutModalOpen}
        >
          LOGOUT
        </Button>

        <LogoutModal
          open={modalLogoutOpen}
          handleClose={handleLogoutModalClose}
          handleLogout={handleLogout}
        />
      </Toolbar>
    </AppBar>
  );
}
