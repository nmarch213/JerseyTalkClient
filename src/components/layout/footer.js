import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  render() {
    // const { location } = this.props;

    return (
      <footer className="footer-bottom">
        <div className="footer-copyright">
          <div className="container center-align">
          © 2017 JerseyTalk
          </div>
        </div>
      </footer>
    );
  }
}
