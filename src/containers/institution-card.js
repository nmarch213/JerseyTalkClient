import React, { Component } from 'react';
import { connect }from 'react-redux'
import { fetchCoreInformation } from '../actions/index';

class InstitutionCard extends Component {
  componentWillMount(){
    this.props.fetchCoreInformation(this.props.params.id);
  }

  renderInstitutions(){
    return this.props.institutions.map((id) => {
      return (
        <li key={institutions.id} className="list-group-item">{institutions.institution}</li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderInstitutions()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    institutions: state.institutions
  };
}

export default connect(mapStateToProps)(InstitutionCard);
