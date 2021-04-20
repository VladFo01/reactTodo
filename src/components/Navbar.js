import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">
      Note App
    </div>

    <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">Информация</NavLink>
        </li>
      </ul>
  </nav>
)

export default Navbar;