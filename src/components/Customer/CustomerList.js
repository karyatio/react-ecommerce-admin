import React, { Component } from "react";
import axios from "axios";
import cookies from "js-cookie";

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
    return (
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers
            ? customers.map(customer => {
                return (
                  <tr>
                    <td>{customer.firstName.concat(" ", customer.lastName)}</td>
                    <td>{customer.email}</td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    );
  }
}

export default CustomerList;
