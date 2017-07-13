import React, { Component } from 'react';
import './Home.css'

class Home extends Component {


  render() {
    let heading = "Soaring to new heights";
    let subheading = "This would be an example of the subheading you could place beneath your main call to action.";

    return (

      <div>

        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{heading}</h1>
              <div className="is-two-thirds column is-paddingless">
                <h2 className="subtitle">{subheading}</h2>
              </div>
              <a className="button is-large is-primary" id="learn" href="#">Learn More</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns pd is-desktop">
              <div className="column is-1 has-text-centered">
                <i className="fa fa-cog is-primary"></i>
              </div>
              <div className="column is-one-third-desktop">
                <p className="title">
                  <strong>Big title here</strong>
                </p>
              </div>
              <div className="column is-offset-1">
                <p>Some more text describing product goes over here, blah blah blah more text more lorem less ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>


          <div className="columns pd">
            <div className="column">
              <div className="card has-text-centered">
                <div className="card-content">
                  <p className="title">Must buy</p>
                  <p classname="subtitle">Text for this card goes here</p>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card has-text-centered">
                <div className="card-content">
                  <p className="title">5 stars</p>
                  <p classname="subtitle">This is another card in the center</p>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card has-text-centered">
                <div className="card-content">
                  <p className="title">Best</p>
                  <p classname="subtitle">This is my last card to be featured</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    );
  }
}

export default Home
