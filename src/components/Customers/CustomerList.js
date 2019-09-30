import React, { Component, Fragment } from "react";
import axios from "axios";
import cookies from "js-cookie";
import { Link } from "react-router-dom";

// Component
import Title from "../Title";

// Material UI
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Paper
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

class CustomerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    const token = cookies.get("jwt");

    axios
      .get("http://localhost:5000/api/users", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.setState({ customers: res.data.data });
      })
      .catch(err => {
        alert(err.message);
      });
  }

  render() {
    const { customers } = this.state;
    const { match, classes } = this.props;

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
                  <TableCell align="center">Detail</TableCell>
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
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`${match.url}/${customer._id}`}
                      >
                        <VisibilityIcon />
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

export default withStyles(styles)(CustomerList);
