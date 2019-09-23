import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="topnav">
      <nav className="navigation">
        <div className="spacer"></div>

        <ul>
          <li>
            <a href="/">User Name</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
