import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSearch, FaCog } from 'react-icons/fa';
import './Header.css'; // Importa el archivo CSS

const Header = ({ onSearch, profileImage }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const getPageName = () => {
    const path = location.pathname.substring(1);
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="header-top">
      <h2 className="section-name">{getPageName() || 'Home'}</h2>

      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for something"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className="icons-container">
        <FaCog onClick={toggleMenu} className="icon" />

        {/* Menú desplegable animado */}
        <div className={`dropdown-menu ${showMenu ? 'show' : ''}`}>
          <ul>
            <li><a href="/">Sign in with another account</a></li>
            <li><a href="/register">Create account</a></li>
            <li><a href="/">Log out</a></li>
          </ul>
        </div>

        {profileImage && <img src={profileImage} alt="Profile" className="profile-image" />}
      </div>
    </div>
  );
};

export default Header;
