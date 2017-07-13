import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: false}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  render() {

    let menuActive = this.state.isToggleOn ? 'is-active' : '';


    return (
      <nav className="navbar">
        <div className="navbar-brand">

          <Link to="/" className="navbar-item logo" href="#">Logo Here</Link>

          <div className='navbar-burger' onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={'navbar-menu'+menuActive}>
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
