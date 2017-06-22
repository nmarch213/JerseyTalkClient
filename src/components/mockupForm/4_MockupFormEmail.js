import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';


const MockupFormEmail = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
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
          <h1>Please Enter your Email</h1>
        </div>
      </div>

      <br />
      <Field
        name="school"
        className="form-control"
        component="input"
        type="email"
        label="Name"
      />
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
})(MockupFormEmail);
