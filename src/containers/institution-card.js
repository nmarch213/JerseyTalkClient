import _ from 'lodash';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoreInformation } from '../actions/index';


class InstitutionCard extends Component {
  componentDidMount() {
    this.props.fetchCoreInformation();
  }

  renderInstitutions() {
    return _.map(this.props.institutions, school => (
      <div className="col" key={school.id}>
        <div className="card">
          <img className="card-img-top" src="http://via.placeholder.com/150x150" alt="Card cap" />
          <div className="card-block">
            <h4 className="card-title">{school.institution}</h4>
            <h5>{school.division}</h5>
            <hr />
            <p className="card-text">This will be a bio on the school.</p>
            <Link className="btn btn-primary" to={`/schools/${school.id}`}>
                View This School
            </Link>
          </div>
        </div>
      </div>
    ));
  }


  render() {
    const { institutions } = this.props;

    if (!institutions) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="jumbotron text-center">
          <div className="form-group col-md-4 offset-md-4">
            <h1>JerseyTalk</h1>
            <hr />
            <p>Tell YOUR story</p>
            <br />
            <label htmlFor="SearchBar" className="form-control">Search For A School </label>
            <input id="SearchBar" type="text" className="form-control" />
          </div>
        </div>
        <div className="card-deck">
          {this.renderInstitutions()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { institutions: state.institutions };
}

export default connect(mapStateToProps, { fetchCoreInformation })(InstitutionCard);
