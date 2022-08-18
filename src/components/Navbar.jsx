import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
// FaTimes,
import Logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="company logo" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link tp="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link tp="/" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link tp="/" className="nav-link">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link tp="/" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hamburger">
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
