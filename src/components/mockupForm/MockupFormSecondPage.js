import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';


let UniversityReviewFormSecondPage = (props) => {
  const {
    sportChosen,
  } = props;
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Grade The Facilities</h1>
      <div className="form-group">
        <label htmlFor="facilityArena">What was the quality of the main arena?</label>
        <Field
          className="form-control"
          id="facilityArena"
          name="facilityArena"
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
        <label htmlFor="facilityCrowd">How was the home crowd?</label>
        <Field
          className="form-control"
          id="facilityCrowd"
          name="facilityCrowd"
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
        <label htmlFor="facilityWeightRoom">How was the weight room?</label>
        <Field
          className="form-control"
          id="facilityWeightRoom"
          name="facilityWeightRoom"
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
        <label htmlFor="facilityLockerRoom">How was the locker room?</label>
        <Field
          className="form-control"
          id="facilityLockerRoom"
          name="facilityLockerRoom"
          component="select"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Field>
      </div>\
      <div className="form-group">
        <label htmlFor="facilityTrainingRoom">How was the training room?</label>
        <Field
          className="form-control"
          id="facilityTrainingRoom"
          name="facilityTrainingRoom"
          component="select"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Field>
      </div>
      <label htmlFor="facilityNotes">Notes</label>
      {sportChosen}
      <div className="form-group">
        <Field
          name="facilityNotes"
          component="textarea"
          placeholder="Additional information"
          className="form-control"
        />
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

const selector = formValueSelector('UniversityReviewForm');

UniversityReviewFormSecondPage = connect(
  (state) => {
    const sportChosen = selector(state, 'sport');

    return {
      sportChosen,
    };
  },
)(UniversityReviewFormSecondPage);

export default reduxForm({
  form: 'UniversityReviewForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(UniversityReviewFormSecondPage);
