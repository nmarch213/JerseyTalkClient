import _ from 'lodash';
import StarRatingComponent from 'react-star-rating-component';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import renderField from './renderField';

class MockupFormFacility extends Component {
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
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="row text-center hidden-sm-down">
            <div className="container offset-2 col-4">
              <img
                alt="school Logo"
                id="mockupSchoolLogo"
                src="https://upload.wikimedia.org/wikipedia/en/8/88/West_Florida_Argos_logo.png"
              />
            </div>
            <div className="container pull-2 col-5 center">
              <h1>Grade The Facility</h1>
              <p>Atheltic Facilities</p>
            </div>
          </div>

          <div className="row text-center hidden-md-up">
            <div className="container">
              <img
                alt="school Logo"
                id="mockupSchoolLogo"
                src="https://upload.wikimedia.org/wikipedia/en/8/88/West_Florida_Argos_logo.png"
              />
            </div>
            <div className="container">
              <h1>Grade The Facility</h1>
              <p>Atheltic Facilities</p>
            </div>
          </div>

          <br />

          <div className="row">
            <h4 className="col-6">Main Arena</h4>
            <StarRatingComponent
              name="rate1"
              className="col-6"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <h4 className="col-6">Home Crowds</h4>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              className="col-6"
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <h4 className="col-6">Weight Room</h4>
            <StarRatingComponent
              name="rate1"
              className="col-6"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <h4 className="col-6">Locker Room</h4>
            <StarRatingComponent
              className="col-6"
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <h4 className="col-6">Athletic Training Room</h4>
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
})(MockupFormFacility);
