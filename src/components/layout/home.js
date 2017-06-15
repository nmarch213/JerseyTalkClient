import React, { Component } from 'react';

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
      <div className="text-center" id="home">
        <div className="container">
          <h3>Share what it was like playing for your college team</h3>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
        <div className="jumbotron container-fluid">
          <h3>Educate high school athletes about your college program</h3>
        </div>
        <div className="container">
          <h3>Speak Truthfully</h3>
          <p>Reviews are anonymous to protect your identity</p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </div>
    );
  }
}
