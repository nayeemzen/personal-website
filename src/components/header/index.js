import React from 'react';
import './header.css';

const Header = ({header, subheader}) => (
  <div className="header">
    <h1> {header} </h1>
    <p> {subheader} </p>
  </div>
);

export default Header;