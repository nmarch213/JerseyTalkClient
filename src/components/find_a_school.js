import React, { Component } from 'react';

import UniversityReviewForm from './universityReviewForm/UniversityReviewForm';
import showResults from './universityReviewForm/showResults';
import InstitutionCard from './../containers/institution-card';

class FindASchool extends Component {
  render() {
    return (
      <div>
        <UniversityReviewForm onSubmit={showResults} />
        <InstitutionCard />
      </div>
    );
  }
}

export default FindASchool;
