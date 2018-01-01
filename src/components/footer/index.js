import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="footer">
    <a href="https://linkedin.com/in/nayeemzen">
      <i className="fa fa-linkedin" aria-hidden="true"/>
    </a>
    <a href="mailto:nayeem.zen@live.com">
      <i className="fa fa-envelope-o" aria-hidden="true"/>
    </a>
    <a href="https://git.io/zen">
      <i className="fa fa-github-alt" aria-hidden="true"/>
    </a>
    <a href="https://stackoverflow.com/users/2361055/nayeem-zen">
      <i className="fa fa-stack-overflow" aria-hidden="true"/>
    </a>
  </div>
);

export default Footer;