import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaExchangeAlt, FaUser, FaChartBar, FaCreditCard, FaMoneyCheck, FaTools, FaKey, FaCog, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú al hacer clic en cualquier enlace
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-header">
        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <h1 className="navbar-title">Bank Dash</h1>
      </div>
      <ul className={`navbar-list`}>
        <li className="navbar-item" onClick={handleLinkClick}>
          <Link to="/home" className="navbar-link">
            <FaHome className="icon" />
            Dashboard
          </Link>
        </li>
        <li className="navbar-item" onClick={handleLinkClick}>
          <Link to="/transactions" className="navbar-link">
            <FaExchangeAlt className="icon" />
            Transactions
          </Link>
        </li>
        <li className="navbar-item" onClick={handleLinkClick}>
          <Link to="/profile" className="navbar-link">
            <FaUser className="icon" />
            Accounts
          </Link>
        </li>
        <li className="navbar-item" onClick={handleLinkClick}>
          <Link to="/investments" className="navbar-link">
            <FaChartBar className="icon" />
            Investments
          </Link>
        </li>
        <li className="navbar-item" onClick={handleLinkClick}>
          <Link to="/creditcards" className="navbar-link">
            <FaCreditCard className="icon" />
            Credit Cards
          </Link>
        </li>
        <li className="navbar-item" onClick={handleLinkClick}>
          <Link to="/loans" className="navbar-link">
            <FaMoneyCheck className="icon" />
            Loans
          </Link>
        </li>
        <li className="navbar-item" onClick={handleLinkClick}>
          <Link to="/services" className="navbar-link">
            <FaTools className="icon" />
            Services
          </Link>
        </li>
        <li className="navbar-item" onClick={handleLinkClick}>
          <Link to="/privileges" className="navbar-link">
            <FaKey className="icon" />
            My Privileges
          </Link>
        </li>
        <li className="navbar-item" onClick={handleLinkClick}>
          <Link to="/settings" className="navbar-link">
            <FaCog className="icon" />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
