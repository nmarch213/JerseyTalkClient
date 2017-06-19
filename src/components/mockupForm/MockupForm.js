import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSchool } from '../../actions/index';

import MockupFormSchool from './1_MockupFormSchool';
import MockupFormSport from './2_MockupFormSport';
import MockupFormName from './3_MockupFormName';
import MockupFormEmail from './4_MockupFormEmail';
import MockupFormRival from './5_MockupFormRival';
import MockupFormCoach from './6_MockupFormCoach';
import MockupFormPlayForCoach from './7_MockupFormPlayForCoach';
import MockupFormFifthPage from './MockupFormFifthPage';

class MockupForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  componentDidMount() {
    // this.props.fetchSchool(this.props.variables.match.params.id);
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    const { school } = this.props;
    return (
      <div className="container-fluid text-center col">
        <div className="MockupForm">
          {page === 1 && <MockupFormSchool
            school={school}
            onSubmit={this.nextPage}
          />}
          {page === 2 &&
            <MockupFormSport
              school={school}
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />}
          {page === 3 &&
            <MockupFormName
              school={school}
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />}
          {page === 4 &&
            <MockupFormEmail
              school={school}
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />}
          {page === 5 &&
            <MockupFormRival
              school={school}
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />}
          {page === 6 &&
            <MockupFormCoach
              school={school}
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />}
            {page === 1 &&
              <MockupFormPlayForCoach
                school={school}
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
              />}
          {page === 7 &&
            <MockupFormFifthPage
              school={school}
              previousPage={this.previousPage}
              onSubmit={onSubmit}
            />}
        </div>
      </div>
    );
  }
}

MockupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { school: state.school };
}

export default connect(mapStateToProps, { fetchSchool })(MockupForm);
