import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTransactions } from "../../actions/transactions";

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
  componentDidMount() {
    const { fetchTransactions } = this.props;
    fetchTransactions();
  }

  render() {
    const { match, classes, transactions } = this.props;

    return (
      <Fragment>
        <Container maxWidth="lg" className={classes.container}>
          <Paper className={classes.paper}>
            <Title>Data Pesanan</Title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Tanggal</TableCell>
                  <TableCell>Konsumer</TableCell>
                  <TableCell>Dikirim Ke</TableCell>
                  <TableCell>Metode Pembayaran</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="center">Detail</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.transactions.map(transaction => (
                  <TableRow key={transaction._id}>
                    <TableCell>{transaction.updatedAt}</TableCell>
                    <TableCell>
                      {transaction.user.firstName +
                        " " +
                        transaction.user.lastName}
                    </TableCell>
                    <TableCell>{transaction.shippingAddress}</TableCell>
                    <TableCell>{transaction.payments.method}</TableCell>
                    <TableCell align="right">
                      {transaction.processStatus}
                    </TableCell>
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

const mapStateToProps = state => {
  const { isLoading, fetchSuccess, transactions, errors } = state;
  return { isLoading, fetchSuccess, transactions, errors };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchTransactions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TransactionList));
