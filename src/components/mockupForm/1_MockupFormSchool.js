import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Line } from 'rc-progress';

import validate from './validate';

class MockupFormSchool extends Component {


  render() {
    const { handleSubmit } = this.props;

    // const renderError = ({ meta: { touched, error } }) => touched && error ?
    //   <span>{error}</span> : false;


    return (
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="progressBar">
            <p className="right-align">0%</p>
            <Line percent="10" strokeWidth="3" strokeColor="#26cc63" />
          </div>
          <div className="row hide-on-small-and-down valign-wrapper">
            <div className="col s3 center-align">
              <img
                alt="school Logo"
                id="mockupSchoolLogo"
                src="http://img.clipartall.com/building-clip-art-clip-art-of-school-600_307.png"
              />
            </div>
            <div className="col s9 center-align">
              <h1>Select Your School</h1>
              <h5>What school did you attend?</h5>
            </div>
          </div>

          <div className="container hide-on-med-and-up center-align">
            <div className="row">
              <img
                alt="school Logo"
                id="mockupSchoolLogo"
                src="http://img.clipartall.com/building-clip-art-clip-art-of-school-600_307.png"
              />
            </div>
            <div className="row">
              <h1>Select Your School</h1>
              <h5>What school did you attend?</h5>
            </div>
          </div>


          <br />
          <div className="input-field col s4">
            <Field
              name="school"
              className="validate z-depth-4"
              component="input"
              type="text"
            />
            <label htmlFor="school center-text">Enter School Name</label>
          </div>
          <br />
          <div className="center">
            <button
              type="submit"
              className="next btn waves-effect waves-light z-depth-4"
            >
              Next <i className="fa fa-angle-double-right" aria-hidden="true" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'MockupForm',              // <------ same form name
  destroyOnUnmount: false,                   // <------ preserve form data
  forceUnregisterOnUnmount: true,
  validate,
})(MockupFormSchool);
