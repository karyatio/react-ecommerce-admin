import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = e => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields");
    } else {
      let data = { username, password };

      axios
        .post("http://localhost:5000/admin/login", data)
        .then(result => {
          console.log(result);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div id="login-wrapper">
      <div id="login-container">
        <Form onSubmit={handleLogin} className="login-form">
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="username"
              name="username"
              id="username"
              placeholder="Enter username ..."
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password ..."
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </FormGroup>
          <Link to="/admin/dashboard" className="btn btn-primary btn-block">
            Submit
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
