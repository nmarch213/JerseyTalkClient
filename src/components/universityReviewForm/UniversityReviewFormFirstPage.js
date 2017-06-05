import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';


const UniversityReviewFormFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="container-fluid">
      <h1>A little about you</h1>
      <p>None of this information will be shown unless explicitly asked</p>
      <form onSubmit={handleSubmit}>
        <Field
          name="athleteName"
          type="text"
          component={renderField}
          label="Who are you?"
        />
        <Field
          name="athleteEmail"
          type="email"
          component={renderField}
          label="Whats your email?"
        />
        <div className="form-group">
          <label htmlFor="athleteSport">What Sport did you play?</label>
          <Field
            name="athleteSport"
            component="select"
            className="form-control"
          >
            <option />
            <option value="mBball">Mens Basketball</option>
            <option value="wBball">Womens Basketball</option>
            <option value="fball">Football</option>
            <option value="bball">Baseball</option>
            <option value="sball">Softball</option>
            <option value="mSoccer">Mens Soccer</option>
            <option value="wSoccer">Womens Soccer</option>
            <option value="vball">Womens Volleyball</option>
          </Field>
        </div>
        <div>
          <button type="submit" className="next">Next</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'UniversityReviewForm',              // <------ same form name
  destroyOnUnmount: false,                   // <------ preserve form data
  forceUnregisterOnUnmount: true,
  validate,
})(UniversityReviewFormFirstPage);
