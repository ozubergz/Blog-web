import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../logo/photo.jpg';

class SideNav extends Component {
  render() {
    return(
      <div className="side-nav">
        <nav className="nav flex-column">
          <div className="img-placeholder">
            <Link to="/">
              <img src={image} alt="Portfolio pic"/>
            </Link>
            <h1>aden PHP</h1>
            <p>code made simple</p>
          </div>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Me</Link>
          <Link to="/contact"className="nav-link" >Contact Me</Link>
        </nav>
      </div>
    );
  }
}

export default SideNav;