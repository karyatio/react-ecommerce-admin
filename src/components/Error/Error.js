import React from "react";
import { Paper } from "@material-ui/core";
import useStyles from "./styles";

function Error({ errors }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <h3>Error : {errors.message}</h3>
      <p>Stack : {errors.stack}</p>
    </Paper>
  );
}

export default Error;
