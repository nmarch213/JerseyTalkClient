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
          className="navbar-toggler navbar-toggler-right"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <img
          className="navbar-brand"
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
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/review"
                className="nav-link"
              >
                Write Review
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ratings"
                className="nav-link"
              >
                Ratings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about-us"
                className="nav-link"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact-us"
                className="nav-link"
              >
                Contact
              </NavLink>

            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Find Your School" />
            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit" >Search</button>
          </form>
        </div>
      </nav>
    );
  }
}
