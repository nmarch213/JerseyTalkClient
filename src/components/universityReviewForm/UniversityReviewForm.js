import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSchool } from '../../actions/index';

import UniversityReviewFormFirstPage from './UniversityReviewFormFirstPage';
import UniversityReviewFormSecondPage from './UniversityReviewFormSecondPage';
import UniversityReviewFormThirdPage from './UniversityReviewFormThirdPage';

class UniversityReviewForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  componentDidMount() {
    this.props.fetchSchool(this.props.variables.match.params.id);
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
        <div className="">
          {page === 1 && <UniversityReviewFormFirstPage
            school={school}
            onSubmit={this.nextPage}
          />}
          {page === 2 &&
            <UniversityReviewFormSecondPage
              school={school}
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />}
          {page === 3 &&
            <UniversityReviewFormThirdPage
              school={school}
              previousPage={this.previousPage}
              onSubmit={onSubmit}
            />}
        </div>
      </div>
    );
  }
}

UniversityReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { school: state.school };
}

export default connect(mapStateToProps, { fetchSchool })(UniversityReviewForm);
