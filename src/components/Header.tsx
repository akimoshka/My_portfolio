import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header id="header">
    <nav className="navbar">
      <ul className="left-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/comic">Comic</Link></li>
      </ul>
      <ul className="right-nav">
        <li><a href="https://github.com/akimoshka" target="_blank"><i className="fab fa-github"></i></a></li>
        <li><a href="https://t.me/akimoshka" target="_blank"><i className="fab fa-telegram-plane"></i></a></li>
        <li><a href="mailto:e.akimenko@innopolis.university"><i className="fas fa-envelope"></i></a></li>
        <li><a href="https://www.instagram.com/akimoshka55/" target="_blank"><i className="fab fa-instagram"></i></a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
