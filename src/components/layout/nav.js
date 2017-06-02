import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state ={
      collapsed: true,
    };
  }

  toggleCollapse(){
    const collapsed = !this.state.collapsed; //inverts the collapsed toggleCollapse
    this.setState({collapsed});
  }

  render(){
    const { location } = this.props;

    return(
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right"  data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand">JerseyTalk</a>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/">
                Home
              </NavLink>

            </li>
            <li className="nav-item">
              <a className="nav-link">Review A School<span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>

      </nav>
    );
  }
}
