import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';


let MockupFormSport = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1> Select Your Team </h1>
      <p>What team did you play for?</p>
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Men's Basketball
      </Field>
      <br />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Women's Basketball
      </Field>
      <br />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Men's Soccer
      </Field>
      <br />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Women's Soccer
      </Field>
      <br />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Baseball
      </Field>
      <br />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Softball
      </Field>
      <br />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Football
      </Field>
      <br />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
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
  form: 'MockupForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(MockupFormSport);
