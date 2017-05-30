import React, { Component } from 'react';
import { connect }from 'react-redux'
import { fetchCoreInformation } from '../actions/index';

class InstitutionCard extends Component {
  componentDidMount(){
    this.props.fetchCoreInformation();
  }

  renderInstitutions(){
      return (
        <li className="list-group-item"></li>
      );

  }

  render(){
    console.log(this.props.institutions);
    return (
      <ul className="list-group col-sm-4">
        {this.renderInstitutions()}
      </ul>
    )
  }
}

function mapStateToProps(state){

  return { institutions: state.institutions }
}

export default connect(mapStateToProps, { fetchCoreInformation })(InstitutionCard);
