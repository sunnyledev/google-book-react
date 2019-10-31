import React from "react";
import { Link } from "react-router-dom";
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavBar() {
  return (
    <nav className="navbar">
        <ul id="menu">
          <li>
            <Link
              to="/search"
              className={
                window.location.pathname === "/" || window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
              Saved
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
