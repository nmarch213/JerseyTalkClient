import { Line } from 'rc-progress';
import StarRatingComponent from 'react-star-rating-component';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import validate from './validate';

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
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="progressBar">
            <p className="right-align">50%</p>
            <Line percent="50" strokeWidth="3" strokeColor="#26cc63" />
          </div>
          <div className="row hide-on-small-and-down valign-wrapper">
            <div className="col s3 center-align">
              <img
                alt="school Logo"
                id="mockupSchoolLogo"
                src="https://upload.wikimedia.org/wikipedia/en/8/88/West_Florida_Argos_logo.png"
              />
            </div>
            <div className="col s9 center-align">
              <h1>Grade your Head Coach</h1>
              <h5>Bob Stinnet</h5>
            </div>
          </div>
          <div className="container hide-on-med-and-up center-align">
            <div className="row">
              <img
                alt="school Logo"
                id="mockupSchoolLogo"
                src="https://upload.wikimedia.org/wikipedia/en/8/88/West_Florida_Argos_logo.png"
              />
            </div>
            <div className="row">
              <h4>Grade your Head Coach</h4>
              <p className="center-align">Bob Stinnet</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col s6">
              <h4>Recruiting</h4>
              <p>Ability to sign talented athletes to the program</p>
            </div>
            <StarRatingComponent
              name="rate1"
              className="col s6 center-align"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <div className="col s6">
              <h4>Relationship with Players</h4>
              <p>Ability to develope relationships with players</p>
            </div>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              className="col s6 center-align"
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <div className="col s6">
              <h4>Knowledge of Sport</h4>
              <p>Understanding of the Game</p>
            </div>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              className="col s6 center-align"
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <div className="col s6">
              <h4>Player Development</h4>
              <p>Ability to develope skills of players</p>
            </div>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              className="col s6 center-align"
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="row">
            <div className="col s6">
              <h4>Program Tradition</h4>
              <p>Culture and history of program</p>
            </div>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              className="col s6 center-align"
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <hr />
          <div className="row">
            <button
              type="button"
              className="btn previous"
              onClick={previousPage}
            >
              Previous
            </button>
            <button type="submit" className="btn right next">Next</button>
          </div>
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
})(MockupFormCoach);
