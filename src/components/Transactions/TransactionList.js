import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import cookies from "js-cookie";

import Title from "../Title";

// Material UI
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
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

class TransactionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: []
    };
  }

  componentDidMount() {
    const token = cookies.get("jwt");

    axios
      .get("http://localhost:5000/api/transactions", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.setState({ transactions: res.data.data });
      })
      .catch(err => {
        alert(err.message);
      });
  }

  render() {
    const { match, classes } = this.props;

    return (
      <Fragment>
        <Container maxWidth="lg" className={classes.container}>
          <Paper className={classes.paper}>
            <Title>Data Pesanan</Title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Ship To</TableCell>
                  <TableCell>Payment Method</TableCell>
                  <TableCell align="right">Sale Amount</TableCell>
                  <TableCell align="center">Detail</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.transactions.map(transaction => (
                  <TableRow key={transaction._id}>
                    <TableCell>{transaction.updatedAt}</TableCell>
                    <TableCell>{transaction.user.firstName}</TableCell>
                    <TableCell>{transaction.shippingAddress}</TableCell>
                    <TableCell>{transaction.payments.method}</TableCell>
                    <TableCell align="right">{transaction.total}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`${match.url}/${transaction._id}`}
                      >
                        <VisibilityIcon></VisibilityIcon>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </Fragment>
    );
  }
}
export default withStyles(styles)(TransactionList);
