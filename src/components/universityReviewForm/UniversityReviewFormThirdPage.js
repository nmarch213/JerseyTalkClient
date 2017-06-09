import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';


const UniversityReviewFormThirdPage = (props) => {
  console.log(props);
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="notes">Notes</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes" />
        </div>
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'UniversityReviewForm', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(UniversityReviewFormThirdPage);
