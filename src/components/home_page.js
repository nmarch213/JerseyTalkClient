import React, { Component } from 'react';

import IndexSchools from './../containers/index_schools';
import Home from './layout/home';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        {/* <IndexSchools /> */}
        <Home />
      </div>
    );
  }
}

export default HomePage;
