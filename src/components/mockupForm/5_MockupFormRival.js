import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';


let MockupFormRival = (props) => {
  const {
    sportChosen,
  } = props;
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1> Select Your Team </h1>
      <p>What team did you play for?</p>
      <Field
        name="test"
        type="button"
        component="button"
        label="Valdosta State Blazers"
        className="form-control btn btn-outline-secondary"
      >
        Valdosta State Blazers
      </Field>
      <br />
      <Field
        name="test"
        type="button"
        component="button"
        label="Delta State Statesmen"
        className="form-control btn btn-outline-secondary"
      >
        Delta State Statesmen
      </Field>
      <br />
      <Field
        name="test"
        type="button"
        component="button"
        label="Alabama Huntsville Chargers"
        className="form-control btn btn-outline-secondary"
      >
        Alabama Huntsville Chargers
      </Field>
      <br />
      <Field
        name="test"
        type="button"
        component="button"
        label="West Georgia Wolves"
        className="form-control btn btn-outline-secondary"
      >
        West Georgia Wolves
      </Field>
      <br />
      <Field
        name="test"
        type="button"
        component="button"
        label="West Alabama Tigers"
        className="form-control btn btn-outline-secondary"
      >
        West Alabama Tigers
      </Field>
      <br />
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
  );
};

const selector = formValueSelector('UniversityReviewForm');

MockupFormRival = connect(
  (state) => {
    const sportChosen = selector(state, 'sport');

    return {
      sportChosen,
    };
  },
)(MockupFormRival);

export default reduxForm({
  form: 'UniversityReviewForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(MockupFormRival);
