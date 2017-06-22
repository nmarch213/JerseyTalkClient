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
      <div className="row text-center">
        <div className="container offset-2 col-4">
          <img
            alt="school Logo"
            id="mockupSchoolLogo"
            src="https://upload.wikimedia.org/wikipedia/en/8/88/West_Florida_Argos_logo.png"
          />
        </div>
        <div className="container pull-2 col-5 center">
          <h1>University of West Florida</h1>
          <p>Select the toughest place to play in conference</p>
        </div>
      </div>

      <br />
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
