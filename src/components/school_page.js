import React, { Component } from 'react';

import ShowSchool from '../containers/show_school';
import UniversityReviewForm from './universityReviewForm/UniversityReviewForm';
import showResults from './universityReviewForm/showResults';

class SchoolPage extends Component {
  render() {
    return (
      <div>
        <ShowSchool variables={this.props} />
        <UniversityReviewForm onSubmit={showResults} />
      </div>
    );
  }
}

export default SchoolPage;
