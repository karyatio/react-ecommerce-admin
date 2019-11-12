import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCustomers } from "../../actions/customers";
import Title from "../../components/Title";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from "@material-ui/core";
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

class CustomerList extends Component {
  componentDidMount() {
    const { fetchCustomers } = this.props;
    fetchCustomers();
  }

  render() {
    const { match, classes, customers } = this.props;

    return (
      <Fragment>
        <Container maxWidth="lg" className={classes.container}>
          <Paper className={classes.paper}>
            <Title>Data pelanggan</Title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nama Depan</TableCell>
                  <TableCell>Nama Belakang</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Daftar Tanggal</TableCell>
                  {/* <TableCell align="center">Detail</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map(customer => (
                  <TableRow key={customer._id}>
                    <TableCell>{customer.firstName}</TableCell>
                    <TableCell>{customer.lastName}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.createdAt}</TableCell>
                    <TableCell align="center">
                      {/* <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`${match.url}/${customer._id}`}
                      >
                        <VisibilityIcon />
                      </Button> */}
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
  const { customers } = state.customers;

  return { customers };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchCustomers }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CustomerList));
