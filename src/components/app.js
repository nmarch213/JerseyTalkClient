import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './layout/nav';
import UniversityReviewForm from './universityReviewForm/UniversityReviewForm';
import showResults from './universityReviewForm/showResults';
import InstitutionCard from '../containers/institution-card';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { institution:  [] };

    axios.get('http://localhost:3000/getUniversityCoreInfo').
      then(function(response){
        this.setState({institution: response.data});
      });
  }
  render() {
    return (
      <div>
        <NavBar />
        <UniversityReviewForm onSubmit={showResults}/>
        <InstitutionCard institution={this.state.institution} />
      </div>
    );
  }
}
