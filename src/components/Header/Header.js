import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (

      <nav className="navbar">
        <div className="navbar-brand">
          
          <Link to="/" className="navbar-item logo" href="#">Logo Here</Link>

          <div className="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">

            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/faq" className="navbar-item">FAQ</Link>
            <Link to="/faq" className="navbar-item">About</Link>
            <Link to="/faq" className="navbar-item">Contact</Link>

          <div className="navbar-item">
            <p className="control">
              <a className="button is-primary is-outlined">
                <span className="icon">
                  <i className="fa fa-thumbs-up"></i>
                </span>
                <span>Join Now!</span>
              </a>
            </p>
          </div>

          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
