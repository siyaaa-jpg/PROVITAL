import React from "react";
import "./Navbar.css";
import logo from "../Group 1010108451.png"; // Path is relative to Navbar.js


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Use the imported image */}
        <img src={logo} alt="ProVital Logo" />
      </div>
      <ul className="nav-links">
        <li>List your practice</li>
        <li className="separator">|</li>
        <li>For Employers</li>
        <li className="separator">|</li>
        <li>Courses</li>
        <li className="separator">|</li>
        <li>Doctors</li>
        <li className="separator">|</li>
        <li>Books</li>
        <li className="separator">|</li>
        <li>Speakers</li>
        <li className="separator">|</li>
        <li className="dropdown">
          Login / Signup
          <ul className="dropdown-menu">
            <li>Doctor</li>
            <li>Patient</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
