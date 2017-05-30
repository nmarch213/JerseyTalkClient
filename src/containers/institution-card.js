import React, { Component } from 'react';
import { connect }from 'react-redux'
import { fetchCoreInformation } from '../actions/index';
import _ from 'lodash';

class InstitutionCard extends Component {
  componentDidMount(){
    this.props.fetchCoreInformation();
  }

  renderInstitutions(){
      return _.map(this.props.institutions, school => {
          return (
            <li className="list-group-item" key={school.id}>
              {school.institution}
            </li>
          )
        });
  }

  render(){
    console.log(this.props.institutions);
    return (
      <div>
        <h3>Schools</h3>
        <ul className="list-group">
          {this.renderInstitutions()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){

  return { institutions: state.institutions }
}

export default connect(mapStateToProps, { fetchCoreInformation })(InstitutionCard);
