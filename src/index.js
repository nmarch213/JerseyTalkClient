import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import store from './reducers';
import NavBar from './components/layout/nav';
import UniversityReviewForm from './components/universityReviewForm/UniversityReviewForm';
import showResults from './components/universityReviewForm/showResults';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <NavBar />
      <App />
      <UniversityReviewForm onSubmit={showResults}/>
    </div>
  </Provider>
  , document.querySelector('.container'));
