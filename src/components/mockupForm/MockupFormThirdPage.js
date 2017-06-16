import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';


const UniversityReviewFormThirdPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Grade The Education </h1>
      <div>
        <div className="form-group">
          <label htmlFor="educationDif">Class Difficulty?</label>
          <Field
            className="form-control"
            id="educationDif"
            name="educationDif"
            component="select"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
        </div>
        <div className="form-group">
          <label htmlFor="educationRep">Academic Reputation?</label>
          <Field
            className="form-control"
            id="educationRep"
            name="educationRep"
            component="select"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
        </div>
        <div className="form-group">
          <label htmlFor="educationAssist">Tutors and Assistance?</label>
          <Field
            className="form-control"
            id="educationAssist"
            name="educationAssist"
            component="select"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
        </div>
        <div>
          <label htmlFor="educationNotes">
            What more would you like to share about the education?
          </label>
          <div className="form-group">
            <Field
              name="educationNotes"
              component="textarea"
              placeholder="Additional information"
              className="form-control"
            />
          </div>
        </div>
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="next">Next</button>
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
