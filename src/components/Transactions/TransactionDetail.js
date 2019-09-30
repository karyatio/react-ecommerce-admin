import React, { Component, Fragment } from "react";
import axios from "axios";
import cookies from "js-cookie";

// Component
import TransactionDetailStep from "./TransactionDetailStep";

// Material UI
import { Container, Grid, Paper, ButtonGroup, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  paper: {
    padding: theme.spacing(2)
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
});

class TransactionDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: {},
      activeStep: 0
    };
  }
  componentDidMount() {
    const token = cookies.get("jwt");

    const { id } = this.props.match.params;

    axios
      .get(`http://localhost:5000/api/transactions/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.setState({ transaction: res.data.data });
      })
      .catch(err => {
        alert(err.message);
      });
  }

  acceptTransaction = () => {
    const { _id } = this.state.transaction;
    const token = cookies.get("jwt");

    axios
      .put(
        `http://localhost:5000/api/transactions/${_id}/accept`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(res => {
        const prevActive = this.state.activeStep;
        this.setState({ activeStep: prevActive + 1 });
        alert("Transaksi diterima");
      })
      .catch(err => {
        alert(err.message);
      });
  };

  rejectTransaction = () => {
    const { _id } = this.state.transaction;
    const token = cookies.get("jwt");

    axios
      .put(
        `http://localhost:5000/api/transactions/${_id}/reject`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(res => {
        alert("Transaksi Ditolak");
      })
      .catch(err => {
        alert(err.message);
      });
  };

  render() {
    const {
      products,
      shippingAddress,
      processStatus,
      user
    } = this.state.transaction;
    const { classes } = this.props;

    return (
      <Fragment>
        <Container maxWidth="lg" className={classes.container}>
          <TransactionDetailStep activeStep={this.state.activeStep} />
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <h1>Transaction Name</h1>
                <p>{shippingAddress}</p>
                {products
                  ? products.map(product => {
                      return <p key={product._id}>{product._id}</p>;
                    })
                  : ""}
                <p>{processStatus}</p>
                <p>{user ? user.firstName.concat(" ", user.lastName) : ""}</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <ButtonGroup
                  fullWidth
                  aria-label="large outlined secondary button group"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={this.acceptTransaction}
                  >
                    Terima
                  </Button>
                  <Button
                    color="secondary"
                    size="large"
                    onClick={this.rejectTransaction}
                  >
                    Tolak
                  </Button>
                </ButtonGroup>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}
export default withStyles(styles)(TransactionDetail);
