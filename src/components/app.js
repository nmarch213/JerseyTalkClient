import React, { Component } from 'react';

import NavBar from './layout/nav';
import UniversityReviewForm from './universityReviewForm/UniversityReviewForm';
import showResults from './universityReviewForm/showResults';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <UniversityReviewForm onSubmit={showResults}/>
      </div>
    );
  }
}
