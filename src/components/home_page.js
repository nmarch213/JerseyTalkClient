import React, { Component } from 'react';

import IndexSchools from './../containers/index_schools';
import Home from './layout/home';
import UniversityReviewForm from './universityReviewForm/UniversityReviewForm';
import showResults from './universityReviewForm/showResults';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        {/* <IndexSchools /> */}
        <UniversityReviewForm onSubmit={showResults} variables={this.props} />
        {/* <Home /> */}
      </div>
    );
  }
}

export default HomePage;
