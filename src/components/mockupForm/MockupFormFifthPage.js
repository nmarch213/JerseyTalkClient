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
              <h1>Select Your School</h1>
              <p>What school did you attend?</p>
            </div>
          </div>

          <div>
            <h2>Rating from state: {rating}</h2>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div>
            <h2>Rating from state: {rating}</h2>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div>
            <h2>Rating from state: {rating}</h2>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div>
            <h2>Rating from state: {rating}</h2>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div>
            <h2>Rating from state: {rating}</h2>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div>
            <button type="submit" className="next btn btn-primary">Next</button>
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
})(MockupFormFifthPage);
