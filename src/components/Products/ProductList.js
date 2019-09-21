import React from "react";
import axios from "axios";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/products")
      .then(res => {
        this.setState({ products: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>List of product</h1>

        {this.state.products.map(product => {
          return (
            <div key={product._id}>
              <h3>{product.name}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
