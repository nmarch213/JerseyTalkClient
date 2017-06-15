import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

import HomePage from './components/home_page';
import NavBar from './components/layout/nav';
import Footer from './components/layout/footer';
import SchoolReview from './components/universityReviewForm/UniversityReviewForm';
import SchoolPage from './components/school_page';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/schools/:id/review" component={SchoolReview} />
          <Route path="/schools/:id" component={SchoolPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app'));
