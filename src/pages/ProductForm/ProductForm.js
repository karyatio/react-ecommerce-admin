import React, { Fragment, Component } from "react";
import cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  addProduct,
  fetchProduct,
  editProduct,
  resetProduct
} from "../../actions/product";
import Title from "../../components/Title";

const styles = theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
});

class ProductCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      code: "",
      name: "",
      price: "",
      material: "",
      width: "",
      description: "",
      stock: "",
      color: "",
      image: ""
    };
  }

  componentDidMount() {
    const { isEdit } = this.props;
    const productCode = this.props.match.params.code;
    const token = cookies.get("jwt");

    if (isEdit) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/products/${productCode}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
          this.setState(res.data.data);
        })
        .catch(err => console.log(err.message));
    }
  }

  componentWillUnmount() {
    const { resetProduct } = this.props;

    resetProduct();
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleImageChange = e => this.setState({ image: e.target.files[0] });

  handleSubmit = e => {
    e.preventDefault();

    const { addProduct } = this.props;

    let formData = new FormData();

    formData.append("image", this.state.image, this.state.image.name);
    formData.append("code", this.state.code);
    formData.append("name", this.state.name);
    formData.append("price", this.state.price);
    formData.append("material", this.state.material);
    formData.append("width", this.state.width);
    formData.append("color", this.state.color);
    formData.append("description", this.state.description);
    formData.append("stock", this.state.stock);

    addProduct(formData);
  };

  handleUpdate = e => {
    e.preventDefault();

    const { editProduct } = this.props;

    editProduct(this.state._id, this.state);
  };

  render() {
    const { classes, addSuccess, editSuccess, isEdit } = this.props;

    const {
      code,
      name,
      price,
      stock,
      width,
      material,
      description,
      color,
      fileUpload
    } = this.state;

    if (addSuccess || editSuccess) {
      const { resetProduct } = this.props;
      resetProduct();
      return <Redirect to="/admin/products" />;
    }

    return (
      <Fragment>
        <Container maxWidth="lg" className={classes.container}>
          <Title>Form Produk</Title>
          <form
            onSubmit={isEdit ? this.handleUpdate : this.handleSubmit}
            autoComplete="off"
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="code"
                  name="code"
                  label="Kode Produk"
                  fullWidth
                  value={code}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Nama Produk"
                  fullWidth
                  value={name}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="color"
                  name="color"
                  label="Warna"
                  fullWidth
                  value={color}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="price"
                  name="price"
                  label="Harga"
                  fullWidth
                  value={price}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="stock"
                  name="stock"
                  label="Stok"
                  fullWidth
                  value={stock}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="material"
                  name="material"
                  label="Bahan dan Material"
                  fullWidth
                  value={material}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="width"
                  name="width"
                  label="Lebar (cm)"
                  fullWidth
                  value={width}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="description"
                  name="description"
                  label="Deskripsi Produk"
                  fullWidth
                  value={description}
                  onChange={this.handleChange}
                />
              </Grid>

              {isEdit ? (
                ""
              ) : (
                <Grid item xs={12}>
                  <input
                    type="file"
                    id="fileUpload"
                    name="fileUpload"
                    value={fileUpload}
                    onChange={this.handleImageChange}
                  />
                </Grid>
              )}
            </Grid>

            <Button type="submit" variant="contained" color="primary">
              {isEdit ? "Ubah" : "Tambah"}
            </Button>
          </form>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const {
    product,
    isLoading,
    errors,
    fetchSuccess,
    addSuccess,
    editSuccess
  } = state.product;

  return { product, isLoading, errors, fetchSuccess, addSuccess, editSuccess };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addProduct, fetchProduct, editProduct, resetProduct },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ProductCreate));
