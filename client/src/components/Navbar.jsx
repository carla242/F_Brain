import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Best Movies</div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/add" className="nav-link">Add Movies</Link>
      </div>
    </nav>
  );
}

export default Navbar;
