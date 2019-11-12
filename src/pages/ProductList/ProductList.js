import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCatalog, deleteCatalogItem } from "../../actions/catalog";
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
import Title from "../../components/Title";
import ProductListItem from "../../components/ProductListItem";
import ProductDeleteModal from "../../components/ProductDeleteModal";
import Error from "../../components/Error";
import styles from "./styles";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      deleteId: ""
    };
  }
  componentDidMount() {
    const { fetchCatalog } = this.props;

    fetchCatalog();
  }

  handleDelete = () => {
    const { deleteCatalogItem } = this.props;
    deleteCatalogItem(this.state.deleteId);
    this.setState({ deleteId: "", modalOpen: false });
  };

  handleModalOpen = id => {
    this.setState({ modalOpen: true, deleteId: id });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false, deleteId: "" });
  };

  render() {
    const { classes, match, products, isLoading, errors } = this.props;

    if (errors) return <Error errors={errors} />;

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
                  <TableCell>Gambar</TableCell>
                  <TableCell>Kode</TableCell>
                  <TableCell>Nama</TableCell>
                  <TableCell>Harga</TableCell>
                  <TableCell>Material</TableCell>
                  <TableCell>Lebar</TableCell>
                  <TableCell>Stok</TableCell>
                  <TableCell>Deskripsi</TableCell>
                  <TableCell align="center">Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading ? "Loading" : ""}
                {products.map(product => (
                  <ProductListItem
                    key={product._id}
                    product={product}
                    match={match}
                    handleModalOpen={this.handleModalOpen}
                  />
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Container>

        <ProductDeleteModal
          open={this.state.modalOpen}
          handleClose={this.handleModalClose}
          handleDelete={this.handleDelete}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { products, isLoading, errors } = state.catalog;

  return { products, isLoading, errors };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchCatalog, deleteCatalogItem }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ProductList));
