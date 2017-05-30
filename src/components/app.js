import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './layout/nav';
import UniversityReviewForm from './universityReviewForm/UniversityReviewForm';
import showResults from './universityReviewForm/showResults';
import InstitutionCard from '../containers/institution-card';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <UniversityReviewForm onSubmit={showResults}/>
        <InstitutionCard  />
      </div>
    );
  }
}
