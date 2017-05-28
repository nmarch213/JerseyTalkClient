import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UniversityReviewFormFirstPage from './UniversityReviewFormFirstPage.js';
import UniversityReviewFormSecondPage from './UniversityReviewFormSecondPage.js';
import UniversityReviewFormThirdPage from './UniversityReviewFormThirdPage.js';

class UniversityReviewForm extends Component {
  constructor(props){
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    }
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
    return(
      <div>
        {page === 1 && <UniversityReviewFormFirstPage onSubmit={this.nextPage}/>}
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
    )
  }
}

UniversityReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default UniversityReviewForm;
