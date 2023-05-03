import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
  const [links] = useState([
    { path: '/', text: 'Home' },
    { path: 'calculator', text: 'Calculator' },
    { path: 'quotes', text: 'Quotes' },
  ]);
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul className="nav-items">
        {links.map((link) => <li key={link.text} className="nav-item"><NavLink to={link.path}>{link.text}</NavLink></li>)}
      </ul>
    </nav>
  );
}

export default Navbar;
