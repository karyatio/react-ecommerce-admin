import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Login}></Route>
        <Route path="/admin" component={Dashboard}></Route>
      </div>
    </Router>
  );
}

export default App;
