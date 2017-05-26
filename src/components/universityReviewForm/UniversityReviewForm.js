import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UniversityReviewFormFirstPage from './UniversityReviewFormFirstPage.js'

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
      </div>
    )
  }
}

UniversityReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default UniversityReviewForm;
