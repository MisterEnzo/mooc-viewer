import React, { PropTypes, Component } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="left">
          <li><IndexLink to="/" className="left">Home</IndexLink></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
