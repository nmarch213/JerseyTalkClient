import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed; // inverts the collapsed toggleCollapse
    this.setState({ collapsed });
  }

  render() {
    // const { location } = this.props;

    return (
      <nav className="navbar navbar-static-top navbar-toggleable-md navbar-inverse" id="navbarMain">
        <button
          className="navbar-toggler navbar-toggler-left"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </button>
        <img
          className="navbar-brand hidden-md-up"
          src="/src/images/logo/test-logo.png"
          alt="JerseyTalk Logo"
          id="smalllogo"
        />
        <img
          className="navbar-brand hidden-sm-down"
          src="/src/images/logo/Jerseytalk-logo-half-jerseyWHITE.png"
          alt="JerseyTalk Logo"
          id="logo"
        />
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/review"
                className="nav-link"
              >
                WRITE REVIEW
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about-us"
                className="nav-link"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact-us"
                className="nav-link"
              >
                CONTACT
              </NavLink>

            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
