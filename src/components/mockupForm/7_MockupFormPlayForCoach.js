import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';


let MockupFormPlayForCoach = (props) => {
  const {
    sportChosen,
  } = props;
  const { handleSubmit, previousPage } = props;
  return (
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
          <h1>Would you play for Bob Stinnet again?</h1>
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
          <h1>Would you play for Bob Stinnet again?</h1>
        </div>
      </div>

      <br />
      <Field
        component="button"
        name="yes"
        type="submit"
        className="btn btn-success next"
      >
        Yes
      </Field>
      <Field
        component="button"
        name="yes"
        type="submit"
        className="btn btn-danger next"
      >
        No
      </Field>
      <hr />
      <div className="row">
        <button
          type="button"
          className="btn btn-outline-success previous form-control"
          onClick={previousPage}
        >
          Previous
        </button>
      </div>
    </form>
  );
};

const selector = formValueSelector('UniversityReviewForm');

MockupFormPlayForCoach = connect(
  (state) => {
    const sportChosen = selector(state, 'sport');

    return {
      sportChosen,
    };
  },
)(MockupFormPlayForCoach);

export default reduxForm({
  form: 'UniversityReviewForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(MockupFormPlayForCoach);
