import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchSchool } from '../actions/index';

class ShowSchool extends Component {
  componentDidMount(){
    this.props.fetchSchool(this.props.match.params.id);
  }

  render(){
    const { school } = this.props;

    if (!school){
      return <div>Loading...</div>
    }

    return(
      <div>
        <h1>{school.institution}</h1>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { school: state.school };
}

export default connect(mapStateToProps, { fetchSchool })(ShowSchool);
