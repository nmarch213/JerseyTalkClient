import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';


const UniversityReviewFormFourthPage = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Grade The Location </h1>
      <div>
        <div className="form-group">
          <label htmlFor="locationWeather">How was the weather?</label>
          <Field
            className="form-control"
            id="locationWeather"
            name="locationWeather"
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
          <label htmlFor="locationNightLife">How was the Night Life?</label>
          <Field
            className="form-control"
            id="locationNightLife"
            name="locationNightLife"
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
          <label htmlFor="locationFans">How were the fans?</label>
          <Field
            className="form-control"
            id="locationFans"
            name="locationFans"
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
          <label htmlFor="locationCity">How was the city?</label>
          <Field
            className="form-control"
            id="locationCity"
            name="locationCity"
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
          <label htmlFor="locationNotes">
            What more would you like to share about the Location?
          </label>
          <div className="form-group">
            <Field
              name="locationNotes"
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
})(UniversityReviewFormFourthPage);
