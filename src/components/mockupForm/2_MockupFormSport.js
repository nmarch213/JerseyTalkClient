import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Line } from 'rc-progress';
import validate from './validate';


const MockupFormSport = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="progressBar">
          <p className="right-align">10%</p>
          <Line percent="10" strokeWidth="3" strokeColor="#26cc63" />
        </div>
        <div className="row hide-on-small-and-down valign-wrapper">
          <div className="col s3 center-align">
            <img
              alt="school Logo"
              id="mockupSchoolLogo"
              src="https://upload.wikimedia.org/wikipedia/en/8/88/West_Florida_Argos_logo.png"
            />
          </div>
          <div className="col s9 center-align">
            <h1>Select Your Team</h1>
            <h5>What team did you play for?</h5>
          </div>
        </div>

        <div className="container hide-on-med-and-up center-align">
          <div className="row">
            <img
              alt="school Logo"
              id="mockupSchoolLogo"
              src="https://upload.wikimedia.org/wikipedia/en/8/88/West_Florida_Argos_logo.png"
            />
          </div>
          <div className="row">
            <h1>Select Your Team</h1>
            <h5>What team did you play for?</h5>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="col s4">
            <div className="row center-align">
              <Field
                name="test"
                type="button"
                component="button"
                label="Men's Basketball"
                className="btn sportButton"
              >
                Men's Basketball
              </Field>
            </div>
            <div className="row center-align">
              <Field
                name="test"
                type="button"
                component="button"
                label="Men's Basketball"
                className="btn sportButton"
              >
                Women's Basketball
              </Field>
            </div>
            <div className="row center-align">
              <Field
                name="test"
                type="button"
                component="button"
                label="Men's Basketball"
                className="btn sportButton"
              >
                Men's Soccer
              </Field>
            </div>
            <div className="row center-align">
              <Field
                name="test"
                type="button"
                component="button"
                label="Men's Basketball"
                className="btn sportButton"
              >
                Women's Soccer
              </Field>
            </div>
          </div>
        <div className="col s4">
          <div className="row center-align">
            <Field
              name="test"
              type="button"
              component="button"
              label="Men's Basketball"
              className="btn sportButton"
            >
              Baseball
            </Field>
          </div>
          <div className="row center-align">
            <Field
              name="test"
              type="button"
              component="button"
              label="Men's Basketball"
              className="btn sportButton"
            >
              Softball
            </Field>
          </div>
          <div className="row center-align">
            <Field
              name="test"
              type="button"
              component="button"
              label="Men's Basketball"
              className="btn sportButton"
            >
              Football
            </Field>
          </div>
          <div className="row center-align">
            <Field
              name="test"
              type="button"
              component="button"
              label="Men's Basketball"
              className="btn sportButton"
            >
              Women's Volleyball
            </Field>
          </div>
        </div>
      </div>
        <hr />
        <div className="row">
          <button
            type="button"
            className="btn btn-outline-success previous  col-6"
            onClick={previousPage}
          >
            Previous
          </button>
          <button type="submit" className="btn right next">Next</button>
        </div>
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
