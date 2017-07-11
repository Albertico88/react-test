import React, { Component } from 'react';
import './Header.css';


class Header extends Component {



  render() {
    return (


      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item logo" href="#">Logo Here</a>

          <div className="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">FAQ</a>
            <a className="navbar-item">About</a>
            <a className="navbar-item">Contact</a>

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
