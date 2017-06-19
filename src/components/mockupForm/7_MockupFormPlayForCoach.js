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
      <h1> Would you play for Bob Stinnet Again? </h1>
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