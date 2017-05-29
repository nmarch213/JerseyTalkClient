import React, { Component } from 'react';
import { connect }from 'react-redux'

class InstitutionCard extends Component {

  renderInstitutions(){
    return this.props.institutions.map((institution) => {
      return (
        <li key={institution.id} className="list-group-item">{institution.institution}</li>
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
