import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import cookies from "js-cookie";

class TransactionDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: {}
    };
  }
  componentDidMount() {
    const token = cookies.get("jwt");

    const { id } = this.props.match.params;

    axios
      .get(`http://localhost:5000/api/transactions/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.setState({ transaction: res.data.data });
      })
      .catch(err => {
        alert(err.message);
      });
  }

  acceptTransaction = () => {
    const { _id } = this.state.transaction;
    const token = cookies.get("jwt");

    axios
      .put(
        `http://localhost:5000/api/transactions/${_id}/accept`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(res => {
        alert("Transaksi diterima");
      })
      .catch(err => {
        alert(err.message);
      });
  };

  rejectTransaction = () => {
    const { _id } = this.state.transaction;
    const token = cookies.get("jwt");

    axios
      .put(
        `http://localhost:5000/api/transactions/${_id}/reject`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(res => {
        alert("Transaksi Ditolak");
      })
      .catch(err => {
        alert(err.message);
      });
  };

  render() {
    const {
      products,
      shippingAddress,
      processStatus,
      user
    } = this.state.transaction;

    return (
      <div>
        <h1>Transaction Name</h1>
        <p>{shippingAddress}</p>
        {products
          ? products.map(product => {
              return <p key={product._id}>{product._id}</p>;
            })
          : ""}
        <p>{processStatus}</p>
        <p>{user ? user.firstName.concat(" ", user.lastName) : ""}</p>
        <Button color="success" onClick={this.acceptTransaction}>
          Terima
        </Button>
        <hr></hr>
        <Button color="danger" onClick={this.rejectTransaction}>
          Tolak
        </Button>
      </div>
    );
  }
}
export default TransactionDetail;
