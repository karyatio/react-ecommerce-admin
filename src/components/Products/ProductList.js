import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";

import ProductDeleteModal from "./ProductDeleteModal";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isError: false,
      modal: false,
      deleteId: ""
    };
  }

  openModal = productId => {
    this.setState({
      modal: true,
      deleteId: productId
    });
  };

  closeModal = () => {
    this.setState({
      modal: false,
      deleteId: ""
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/products")
      .then(res => {
        this.setState({ products: res.data.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isError: true });
      });
  }

  renderProducts = () => {
    const products = this.state.products;
    const { match } = this.props;

    if (this.state.isError) return <p>Something went wrong</p>;

    if (!products) return <p>No products available</p>;

    return products.map(product => {
      return (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.stock}</p>

          <Link to={`${match.url}/${product.code}/edit`}>Edit</Link>
          <Button
            color="danger"
            onClick={this.openModal.bind(this, product._id)}
          >
            Delete
          </Button>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>List of product</h1>

        {this.renderProducts()}

        <ProductDeleteModal
          modal={this.state.modal}
          closeModal={this.closeModal}
          deleteId={this.state.deleteId}
        ></ProductDeleteModal>
      </div>
    );
  }
}

export default ProductList;
