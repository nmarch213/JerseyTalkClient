import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField'

const UniversityReviewFormFirstPage = (props) => {
  const { handleSubmit } = props;
  return(
    <form onSubmit={handleSubmit}>
      <Field
        name="institution"
        type="text"
        component={renderField}
        label="Choose Your School"
      />
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'UniversityReviewForm',              // <------ same form name
  destroyOnUnmount: false,                   // <------ preserve form data
  forceUnregisterOnUnmount: true,
  validate,
})(UniversityReviewFormFirstPage);
