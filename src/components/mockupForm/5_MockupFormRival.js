import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Line } from 'rc-progress';
import { connect } from 'react-redux';
import validate from './validate';


let MockupFormRival = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="progressBar">
          <p className="right-align">40%</p>
          <Line percent="40" strokeWidth="3" strokeColor="#26cc63" />
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
            <h1>University of West Florida</h1>
            <h5>Select your Conference Rival</h5>
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
            <h4>University of West Florida</h4>
            <p className="center-align">Select your Conference Rival</p>
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
                className="btn rivalButton"
              >
                Valdosta State Blazers
              </Field>
            </div>
            <div className="row center-align">
              <Field
                name="test"
                type="button"
                component="button"
                label="Men's Basketball"
                className="btn rivalButton"
              >
                Delta State Statesmen
              </Field>
            </div>
            <div className="row center-align">
              <Field
                name="test"
                type="button"
                component="button"
                label="Men's Basketball"
                className="btn rivalButton"
              >
                Alabama Huntsville Chargers
              </Field>
            </div>
            <div className="row center-align">
              <Field
                name="test"
                type="button"
                component="button"
                label="Men's Basketball"
                className="btn rivalButton"
              >
                West Georgia Wolves
              </Field>
            </div>
            <div className="row center-align">
              <Field
                name="test"
                type="button"
                component="button"
                label="Men's Basketball"
                className="btn rivalButton"
              >
                West Alabama Tigers
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

const selector = formValueSelector('UniversityReviewForm');

MockupFormRival = connect(
  (state) => {
    const sportChosen = selector(state, 'sport');

    return {
      sportChosen,
    };
  },
)(MockupFormRival);

export default reduxForm({
  form: 'UniversityReviewForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(MockupFormRival);
