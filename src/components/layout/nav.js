import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

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
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";

    return(
      <nav className="navbar navbar-inverse" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">JerseyTalk</a>
          </div>
          <div id="navbar" className={"navbar-collapse navbar-right "+ navClass}>
            <ul className="nav navbar-nav">
              <li><a>Home</a></li>
              <li><a>Review A School</a></li>
              <li><a>Ratings</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
