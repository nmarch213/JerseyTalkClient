import React, { Component } from 'react';

import IndexSchools from './../containers/index_schools';
import Home from './layout/home';
import showResults from './universityReviewForm/showResults';
import MockupForm from './mockupForm/MockupForm';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        {/* <IndexSchools /> */}
        <MockupForm onSubmit={showResults} variables={this.props} />
        {/* <Home /> */}
      </div>
    );
  }
}

export default HomePage;
