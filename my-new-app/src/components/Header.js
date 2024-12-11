// src/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src="logo.svg" alt="Logo" className="logo-img" />
          <span className="brand">ProVital</span>
        </div>
        <nav className="nav-links">
          <a href="#" className="nav-link">List your practice</a>
          <a href="#" className="nav-link">For Employers</a>
          <a href="#" className="nav-link">Courses</a>
          <a href="#" className="nav-link">Books</a>
          <a href="#" className="nav-link">Speakers</a>
          <a href="#" className="nav-link">Doctors</a>
          <a href="#" className="nav-link">Login/Signup</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
