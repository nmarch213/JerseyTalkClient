import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

class UniversityReviewFormFirstPage extends Component {

  renderSports() {
    return _.map(this.props.school.sports, sport => (
      <option key={sport.ncaaId} value={sport.index}>{sport.name}</option>
    ));
  }
  render() {
    const { school } = this.props;
    const { handleSubmit } = this.props;

    const renderError = ({ meta: { touched, error } }) => touched && error ?
      <span>{error}</span> : false;

    if (!school) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <h1>Please Select The Sport You Played</h1>

          <Field
            className="form-control"
            id="sport"
            name="sport"
            component="select"
          >
            {this.renderSports()}
          </Field>
          <div>
            <button type="submit" className="next">Next</button>
          </div>
        </form>
      </div>
    );
  }
}


export default reduxForm({
  form: 'UniversityReviewForm',              // <------ same form name
  destroyOnUnmount: false,                   // <------ preserve form data
  forceUnregisterOnUnmount: true,
  validate,
})(UniversityReviewFormFirstPage);
