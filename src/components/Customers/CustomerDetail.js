import React, { Component } from "react";
import axios from "axios";

// Compoenents

// Material UI
import { Container, Paper, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  bio: {
    padding: theme.spacing(2)
  },
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  paper: {
    padding: theme.spacing(2)
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
});

class CustomerDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {}
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.id;

    axios
      .get(`http://localhost:5000/api/users/${userId}`)
      .then(res => {
        this.setState({ customer: res.data.data });
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="lg" className={classes.container}>
        <Paper className={classes.paper}>
          <div className={classes.bio}>
            <p>
              Nama :{" "}
              {this.state.customer.firstName +
                " " +
                this.state.customer.lastName}
            </p>
            <p>Email : {this.state.customer.email}</p>
            <p>Address : {this.state.customer.address}</p>
          </div>
        </Paper>
      </Container>
    );
  }
}

export default withStyles(styles)(CustomerDetail);
