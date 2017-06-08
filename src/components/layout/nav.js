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
      <nav className="navbar navbar-toggleable-md navbar-inverse" id="navbarMain">
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
          src="./src/images/logo/Jerseytalk-logo-half-jerseyWHITE.png"
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
              <a className="nav-link">Review A School<span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}
