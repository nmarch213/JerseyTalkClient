import React, { Component } from 'react';

export default class institutionCard extends Component {

  renderInstitutions(){
    return this.props.institutions.map((id) => {
      return (
        <li key={institutions.id} className="list-group-item">{institutions.school}</li>
      );
    });
  }


  render(){
    return {
      <ul className="list-group col-sm-4">
        {this.renderInstitutions()}
      </ul>
    }
  }
}
