import React from 'react';
import {NavLink} from 'react-router-dom';
import './menu.css';

const Menu = () => (
  <div className="menu">
    <NavLink activeStyle={{ color: '#4DB6AC' }} to="/about">about</NavLink>
    <NavLink activeStyle={{ color: '#4DB6AC' }} to="/services">services</NavLink>
    <a href="https://medium.com/@nayeemzen">blog</a>
    <a href="https://drive.google.com/open?id=1xeiFpb9Oh5Qctp_eN5LMXcyxPkgkDPZH">resume</a>
  </div>
);

export default Menu;