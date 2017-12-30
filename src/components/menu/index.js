import React from 'react';
import './menu.css';

const Menu = ({items}) => (
  <div className="menu">
    {
      items.map((item, idx) =>
        <a href="#" className={idx == 0 ? "selected" : ""}>
          {item}
        </a>
      )
    }
  </div>
);

export default Menu;