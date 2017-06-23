import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Line } from 'rc-progress';
import validate from './validate';


const MockupFormName = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="container form-container">
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
