import _ from 'lodash';
import StarRatingComponent from 'react-star-rating-component';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import renderField from './renderField';

class MockupFormLocation extends Component {
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
              <h1>Grade The Location</h1>
              <p>Pensacola, FL</p>
            </div>
          </div>

          <div className="row">
            <h4 className="col-6">Weather</h4>
            <StarRatingComponent
              name="rate1"
              className="col-6"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <h4 className="col-6">Nightlife</h4>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              className="col-6"
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <h4 className="col-6">Fan Support</h4>
            <StarRatingComponent
              name="rate1"
              className="col-6"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <h4 className="col-6">City Activities</h4>
            <StarRatingComponent
              name="rate1"
              className="col-6"
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
})(MockupFormLocation);
