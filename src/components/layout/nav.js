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
          <span className="navbar-toggler-icon" />
        </button>
        <img
          className="navbar-brand hidden-md-up"
          src="/src/images/logo/jt-logo-jerseyOnly.png"
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
            <li className="nav-item float-right">
              <NavLink
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item float-right">
              <NavLink
                to="/review"
                className="nav-link"
              >
                Write Review
              </NavLink>
            </li>
            <li className="nav-item float-right">
              <NavLink
                to="/about-us"
                className="nav-link"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item float-right">
              <NavLink
                to="/contact-us"
                className="nav-link"
              >
                Contact
              </NavLink>

            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
