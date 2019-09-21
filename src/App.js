import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Login from "./components/Login/Login";
import AdminLayout from "./components/AdminLayout/AdminLayout";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Login}></Route>
        <Route path="/admin" component={AdminLayout}></Route>
      </div>
    </Router>
  );
}

export default App;
