import React, { Fragment, Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

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
      stock: ""
    };
  }

  componentDidMount() {
    const { isEdit } = this.props;

    if (isEdit) {
      const productCode = this.props.match.params.code;
      axios
        .get(`http://localhost:5000/api/products/${productCode}`)
        .then(res => {
          this.setState(res.data.data);
        })
        .catch(err => {
          alert(err);
        });
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    const {
      code,
      name,
      price,
      material,
      width,
      description,
      stock
    } = this.state;

    const { isEdit } = this.props;

    if (
      !code ||
      !name ||
      !price ||
      !material ||
      !width ||
      !description ||
      !stock
    ) {
      return alert("Please fill in all fields");
    }

    if (!isEdit) {
      axios
        .post("http://localhost:5000/api/products", {
          code,
          name,
          price,
          material,
          width,
          description,
          stock
        })
        .then(result => {
          console.log(result.data.data);
          alert("Success");
        })
        .catch(err => {
          alert("Failed");
        });
    } else {
      axios
        .put(`http://localhost:5000/api/products/${this.state._id}`, {
          code,
          name,
          price,
          material,
          width,
          description,
          stock
        })
        .then(result => {
          console.log(result.data.data);
          alert("Success");
        })
        .catch(err => {
          alert("Failed");
        });
    }
  };

  render() {
    const { isEdit } = this.props;

    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit} autoComplete="off">
          <FormGroup>
            <Label for="code">Kode Produk</Label>
            <Input
              type="text"
              name="code"
              value={this.state.code}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="name">Nama</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="price">Harga</Label>
            <Input
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="material">Material</Label>
            <Input
              type="text"
              name="material"
              value={this.state.material}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="width">Lebar</Label>
            <Input
              type="text"
              name="width"
              value={this.state.width}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Deskripsi</Label>
            <Input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="stock">Stock</Label>
            <Input
              type="text"
              name="stock"
              value={this.state.stock}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <Button color="primary" type="submit">
            {isEdit ? "Update" : "Tambah"}
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default ProductCreate;
