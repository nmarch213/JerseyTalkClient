import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';


const MockupFormSport = (props) => {
  const { handleSubmit, previousPage } = props;
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
          <h1>Select Your Team</h1>
          <p>What team did you play for?</p>
        </div>
      </div>
      <br />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Men's Basketball
      </Field>
      <hr />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Women's Basketball
      </Field>
      <hr />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Men's Soccer
      </Field>
      <hr />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Women's Soccer
      </Field>
      <hr />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Baseball
      </Field>
      <hr />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Softball
      </Field>
      <hr />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Football
      </Field>
      <hr />
      <Field
        name="test"
        type="button"
        component="button"
        label="Men's Basketball"
        className="form-control btn btn-outline-secondary"
      >
        Women's Volleyball
      </Field>
      <hr />
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
