import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';


const UniversityReviewFormFourthPage = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1> Select Your Team </h1>
      <p>What team did you play for?</p>
      <Field
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary sportlist"
      >
        Men's Basketball
      </Field>
      <br />
      <Field
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary sportlist"
      >
        Women's Basketball
      </Field>
      <br />
      <Field
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary sportlist"
      >
        Men's Soccer
      </Field>
      <br />
      <Field
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary sportlist"
      >
        Women's Soccer
      </Field>
      <br />
      <Field
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary sportlist"
      >
        Baseball
      </Field>
      <br />
      <Field
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary sportlist"
      >
        Softball
      </Field>
      <br />
      <Field
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary sportlist"
      >
        Football
      </Field>
      <br />
      <Field
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary sportlist"
      >
        Women's Volleyball
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
export default reduxForm({
  form: 'UniversityReviewForm', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(UniversityReviewFormFourthPage);
