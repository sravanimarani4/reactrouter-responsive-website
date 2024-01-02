import React, { useState } from "react";
import "./Navbar.css";
import { SiDatabricks } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [navState, setNavState] = useState(false);
  return (
    <div name="top" className="navbar">
      <div className="container">
        <div className="logo">
          <SiDatabricks className="icon" />
          <h1>Secured</h1>
        </div>
        <ul className={navState ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recovery">Recovery</Link>
          </li>
          <li>
            <Link to="/cloud">Cloud</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button>Sign In</button>
        </ul>
        <div className="hamburger" onClick={() => setNavState(!navState)}>
          {/* <FaBars className="icon" /> */}
          {!navState ? (
            <FaBars className="icon" />
          ) : (
            <FaTimes className="icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
