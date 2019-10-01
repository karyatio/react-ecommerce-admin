import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTransactionsAction } from "../../actions/transactionAction";
import {
  errorState,
  pendingState,
  transactionsState
} from "../../reducers/transactionsReducer";

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
    const { getTransactions } = this.props;
    getTransactions();
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
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Ship To</TableCell>
                  <TableCell>Payment Method</TableCell>
                  <TableCell align="right">Sale Amount</TableCell>
                  <TableCell align="center">Detail</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.transactions.map(transaction => (
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

const mapStateToProps = state => ({
  pending: pendingState(state),
  error: errorState(state),
  transactions: transactionsState(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTransactions: fetchTransactionsAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TransactionList));
