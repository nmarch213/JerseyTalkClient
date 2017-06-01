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
            <div className="card" key={school.id}>
              <img className="card-img-top" src="http://via.placeholder.com/150x150" alt="Card image cap"></img>
              <div className="card-block">
                <h4 className="card-title">{school.institution}</h4>
                <h5>{school.division}</h5>
                <p className="card-text">This will be a bio on the school.</p>
                <a className="btn btn-info btn-block">View This School!</a>
              </div>
            </div>
          )
        });
  }

  render(){
    console.log(this.props.institutions);
    return (
      <div>
        <h3>Schools</h3>
        <div className="card-deck">
          {this.renderInstitutions()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){

  return { institutions: state.institutions }
}

export default connect(mapStateToProps, { fetchCoreInformation })(InstitutionCard);
