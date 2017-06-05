import PropTypes from 'prop-types';
import React, { Component } from 'react';

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

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div className="container-fluid text-center col">
        <div className="">
          {page === 1 && <UniversityReviewFormFirstPage onSubmit={this.nextPage} />}
          {page === 2 &&
            <UniversityReviewFormSecondPage
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />}
          {page === 3 &&
            <UniversityReviewFormThirdPage
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

export default UniversityReviewForm;
