import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';


const UniversityReviewFormFourthPage = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h3>Please Enter your Email</h3>
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
})(UniversityReviewFormFourthPage);
