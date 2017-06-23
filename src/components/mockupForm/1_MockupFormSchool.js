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
        <div className="container form-container">
          <div className="offset-4 col-4 progressBar">
            <p>0%</p>
            <Line percent="0" strokeWidth="5" strokeColor="#26cc63" />
          </div>
          <div className="row text-center hidden-sm-down">
            <div className="container offset-2 col-4">
              <img
                alt="school Logo"
                id="mockupSchoolLogo"
                src="http://img.clipartall.com/building-clip-art-clip-art-of-school-600_307.png"
              />
            </div>
            <div className="container pull-1 col-6 form-header">
              <h1>Select Your School</h1>
              <p>What school did you attend?</p>
            </div>
          </div>

          <div className="row text-center hidden-md-up">
            <div className="container">
              <img
                alt="school Logo"
                id="mockupSchoolLogo"
                src="http://img.clipartall.com/building-clip-art-clip-art-of-school-600_307.png"
              />
            </div>
            <div className="container">
              <h1>Select Your School</h1>
              <p>What school did you attend?</p>
            </div>
          </div>

          <br />
          <div className="input-field">
            <Field
              name="school"
              className="validate"
              component="input"
              type="text"
            />
            <label htmlFor="school">Enter School Name</label>
          </div>
          <br />
          <div>
            <button type="submit" className="next btn btn-primary">Next</button>
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
