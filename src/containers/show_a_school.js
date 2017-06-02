import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchSchool } from '../actions/index';

class ShowSchool extends Component {
  componentDidMount(){
    this.props.fetchSchool(this.props.match.params.id);
  }

  render(){
    const { school } = this.props;

    console.log(school);

    if (!school){
      return <div>Loading...</div>
    }

    return(
      <div className="container-fluid col-md-6">
        <div className="card" key={school.id}>
          <img className="card-img-top" src="http://via.placeholder.com/150x150" alt="Card image cap"></img>
          <div className="card-block text-center">
            <h4 className="card-title">{school.institution}</h4>
            <h5>{school.state}</h5>
            <h5>Division: {school.division}</h5>
            <h5>{school.conference}</h5>
            <hr/>
            <p className="card-text">This will be a bio on the school.</p>
            <hr></hr>
            <p>Head Coach Rating: </p>
            <p>Facility Rating: </p>
            <p>Location Rating: </p>
            <p>Education Rating: </p>

            <Link className="btn btn-primary" to={`/schools/${school.id}/review`}>Leave a Review!</Link>
          </div>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { school: state.school };
}

export default connect(mapStateToProps, { fetchSchool })(ShowSchool);
