import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import cookies from "js-cookie";

class TransactionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: []
    };
  }
  componentDidMount() {
    const token = cookies.get("jwt");

    axios
      .get("http://localhost:5000/api/transactions", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.setState({ transactions: res.data.data });
      })
      .catch(err => {
        alert(err.message);
      });
  }

  render() {
    const { match } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Status</th>
            <th>User</th>
            <th>Lihat</th>
          </tr>
        </thead>
        <tbody>
          {this.state.transactions.map(transaction => {
            return (
              <tr key={transaction._id}>
                <td>{transaction.updatedAt}</td>
                <td>{transaction.processStatus}</td>
                <td>{transaction.user.firstName}</td>
                <td>
                  <Link to={`${match.url}/${transaction._id}`}>Lihat</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default TransactionList;
