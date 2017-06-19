import _ from 'lodash';
import StarRatingComponent from 'react-star-rating-component';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import renderField from './renderField';

class MockupFormCoach extends Component {
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
    const { handleSubmit, previousPage } = this.props;
    const { rating } = this.state;

    // const renderError = ({ meta: { touched, error } }) => touched && error ?
    //   <span>{error}</span> : false;

    if (!school) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container-fluid form-control">
        <form onSubmit={handleSubmit}>
          <div className="row text-center">
            <div className="container">
              <img
                alt="school Logo"
                id="mockupSchoolLogo"
                src="http://img.clipartall.com/building-clip-art-clip-art-of-school-600_307.png"
              />
            </div>
            <div className="container">
              <h1>Grade Your Head Coach</h1>
              <p>Bob Stinnet</p>
            </div>
          </div>

          <div className="row">
            <h4 className="col-6">Recruiting</h4>
            <StarRatingComponent
              name="rate1"
              className="col-6"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <h4 className="col-6">Relationship with Players</h4>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              className="col-6"
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <h4 className="col-6">Knowledge of the Sport</h4>
            <StarRatingComponent
              name="rate1"
              className="col-6"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <h4 className="col-6">Player Development</h4>
            <StarRatingComponent
              className="col-6"
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <h4 className="col-6">Program Tradition</h4>
            <StarRatingComponent
              className="col-6"
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <button
              type="button"
              className="btn btn-outline-success previous form-control col-6"
              onClick={previousPage}
            >
              Previous
            </button>
            <button type="submit" className="btn btn-success next form-control col-6">Next</button>
          </div>
        </form>
      </div>
    );
  }
}


export default reduxForm({
  form: 'MockupForm',              // <------ same form name
  destroyOnUnmount: false,                   // <------ preserve form data
  forceUnregisterOnUnmount: true,
  validate,
})(MockupFormCoach);
