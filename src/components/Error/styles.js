import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2, 1),
    backgroundColor: "red",
    color: "white",
    margin: theme.spacing(3, 2)
  }
}));

export default useStyles;
