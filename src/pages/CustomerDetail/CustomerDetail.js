import React, { Component } from "react";
import axios from "axios";
import { Container, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

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
