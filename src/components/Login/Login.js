import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginAction } from "../../actions/authAction";
// Material
import {
  Typography,
  Button,
  TextField,
  Container,
  CssBaseline,
  Avatar,
  FormControlLabel,
  Checkbox,
  Grid,
  Box
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

// Components
import Copyright from "../Copyright";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();

    const { username, password } = this.state;

    if (!username || !password) {
      alert("Please fill in all fields");
    } else {
      let data = { username, password };
      const { login } = this.props;

      login(data);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { classes, auth } = this.props;

    if (auth) return <Redirect to="/admin/dashboard" />;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon></LockOutlinedIcon>
          </Avatar>
          {process.env.REACT_APP_API_URL}
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              onChange={this.handleChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>

        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;

  return { auth };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ login: loginAction }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
