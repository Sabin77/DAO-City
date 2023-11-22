// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-left">
        <span>DAO CITY</span>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="navbar-right">
        <button>Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;
