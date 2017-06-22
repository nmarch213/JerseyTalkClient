import _ from 'lodash';
import StarRatingComponent from 'react-star-rating-component';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import renderField from './renderField';

class MockupFormFifthPage extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1,
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }


  render() {
    const { school } = this.props;
    const { handleSubmit } = this.props;
    const { rating } = this.state;

    // const renderError = ({ meta: { touched, error } }) => touched && error ?
    //   <span>{error}</span> : false;

    if (!school) {
      return <div>Loading...</div>;
    }
    return (
      <form onSubmit={handleSubmit}>
        <div className="row text-center">
          <div className="container col-4">
            <img
              alt="school Logo"
              id="mockupSchoolLogo"
              src="https://upload.wikimedia.org/wikipedia/en/8/88/West_Florida_Argos_logo.png"
            />
          </div>
        </div>

        <br />
        <h1>Submission to Complete!</h1>
        <p>Thank you for contributing to your community!</p>
        <div>
          <button type="submit" className="next btn btn-primary">Submit!</button>
        </div>
      </form>
    );
  }
}


export default reduxForm({
  form: 'MockupForm',              // <------ same form name
  destroyOnUnmount: false,                   // <------ preserve form data
  forceUnregisterOnUnmount: true,
  validate,
})(MockupFormFifthPage);
