import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchProductsAction from "../../actions/fetchProducts";
import {
  getProducts,
  getProductsPending,
  getProductsError
} from "../../reducers/productsReducer";

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
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

// Components
import Title from "../Title";

const styles = theme => ({
  paper: {
    padding: theme.spacing(2)
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
});

class ProductList extends React.Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  shouldComponentRender = () => {
    const { pending } = this.props;
    if (this.pending === false) return false;
    return true;
  };

  render() {
    const { classes, match, products, error } = this.props;

    // If Pending
    if (!this.shouldComponentRender()) return <h1>Pending</h1>;

    return (
      <Fragment>
        <Container maxWidth="lg" className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`${match.url}/create`}
          >
            Tambah Produk
          </Button>
          <Paper className={classes.paper}>
            <Title>Daftar Produk</Title>

            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Kode</TableCell>
                  <TableCell>Nama</TableCell>
                  <TableCell>Harga</TableCell>
                  <TableCell>Material</TableCell>
                  <TableCell>Lebar</TableCell>
                  <TableCell>Stok</TableCell>
                  <TableCell>Deskripsi</TableCell>
                  <TableCell align="center">Detail</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {error && <span>{error}</span>}
                {products.products.map(product => (
                  <TableRow key={product._id}>
                    <TableCell>{product.code}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.material}</TableCell>
                    <TableCell>{product.width}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell align="center">
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`${match.url}/${product._id}/edit`}
                      >
                        <EditIcon />
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
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProducts: fetchProductsAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ProductList));
