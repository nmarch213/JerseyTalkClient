import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import renderField from './renderField';

class UniversityReviewFormFirstPage extends Component {
  renderSports() {
    return _.map(this.props.school.sports, sport => (
      <option key={sport.ncaaId} value={sport.ncaaId}>{sport.name}</option>
    ));
  }

  renderRoster() {
    const sportObject = _.keyBy(this.props.school.sports, 'ncaaId');

    if (this.props.sportChosen) {
      return _.map(sportObject[this.props.sportChosen].season[0].roster, player => (
        <option key={player.jerseyNumber} value={player.name}>{player.name}</option>
      ));
    }
    return <option value="Anonymous">Anonymous</option>;
  }

  render() {
    const { school } = this.props;
    const { handleSubmit } = this.props;

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

          <Field
            name="school"
            className="form-control"
            component="input"
            type="text"
            value={school._id}
            checked
          />
          <div>
            <button type="submit" className="next btn btn-primary">Next</button>
          </div>
        </form>
      </div>
    );
  }
}

const selector = formValueSelector('UniversityReviewForm');

UniversityReviewFormFirstPage = connect(
  (state) => {
    const sportChosen = selector(state, 'sport');

    return {
      sportChosen,
    };
  },
)(UniversityReviewFormFirstPage);

export default reduxForm({
  form: 'UniversityReviewForm',              // <------ same form name
  destroyOnUnmount: false,                   // <------ preserve form data
  forceUnregisterOnUnmount: true,
  validate,
})(UniversityReviewFormFirstPage);
