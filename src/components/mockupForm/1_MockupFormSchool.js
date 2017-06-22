import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import validate from './validate';

class MockupFormSchool extends Component {


  render() {
    const { handleSubmit } = this.props;

    // const renderError = ({ meta: { touched, error } }) => touched && error ?
    //   <span>{error}</span> : false;


    return (
      <form onSubmit={handleSubmit}>
        <div className="row text-center">
          <div className="container offset-2 col-4">
            <img
              alt="school Logo"
              id="mockupSchoolLogo"
              src="http://img.clipartall.com/building-clip-art-clip-art-of-school-600_307.png"
            />
          </div>
          <div className="container pull-2 col-5 center">
            <h1>Select Your School</h1>
            <p>What school did you attend?</p>
          </div>
        </div>

        <br />

        <Field
          name="school"
          className="form-control"
          component="input"
          type="text"
        />

        <br />
        <div>
          <button type="submit" className="next btn btn-primary">Next</button>
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
