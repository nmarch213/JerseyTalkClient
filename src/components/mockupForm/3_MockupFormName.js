import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Line } from 'rc-progress';
import validate from './validate';


const MockupFormName = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="progressBar">
          <p className="right-align">20%</p>
          <Line percent="20" strokeWidth="3" strokeColor="#26cc63" />
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
            <h1>What is your name?</h1>
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
            <h4>What is your name?</h4>
          </div>
        </div>
        <div className="input-field col s4">
          <Field
            name="school"
            className="validate z-depth-4"
            component="input"
            type="text"
          />
          <label htmlFor="school center-text">Name</label>
        </div>
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
  form: 'MockupForm', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(MockupFormName);
