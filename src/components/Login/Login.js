import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, FormGroup, Input } from "reactstrap";
import cookie from "js-cookie";
import "./Login.css";
import logo from "../../logo.svg";

import { loggedIn } from "../../actions";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { history } = props;
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields");
    } else {
      let data = { username, password };

      axios
        .post("http://localhost:5000/api/admin/login", data)
        .then(result => {
          cookie.set("jwt", result.data.access_token);

          dispatch(loggedIn(true));

          return history.push("/admin/dashboard");
        })
        .catch(err => {
          dispatch(loggedIn(false));
          alert(err.message);
        });
    }
  };

  return (
    <div id="login-wrapper">
      <div id="login-container">
        <img src={logo} className="img-fluid"></img>
        <Form onSubmit={handleLogin} className="login-form" autoComplete="off">
          <FormGroup>
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
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password ..."
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </FormGroup>
          <Button type="submit" color="success" block>
            LOGIN
          </Button>
        </Form>

        {isLogged ? "LoggedIn" : "Not logged in"}
      </div>
    </div>
  );
}

export default Login;
