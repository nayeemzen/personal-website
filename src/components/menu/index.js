import React from 'react';
import {NavLink} from 'react-router-dom';
import './menu.css';

const Menu = () => (
  <div className="menu">
    <NavLink activeStyle={{ color: '#4DB6AC' }} to="/about">about</NavLink>
    <NavLink activeStyle={{ color: '#4DB6AC' }} to="/services">services</NavLink>
    <a href="https://medium.com/@nayeemzen">blog</a>
    <a href="https://goo.gl/E7MqMz">resume</a>
  </div>
);

export default Menu;