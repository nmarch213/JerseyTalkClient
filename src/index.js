import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import store from './reducers';
import UniversityReviewForm from './components/universityReviewForm/UniversityReviewForm';
import showResults from './components/universityReviewForm/showResults';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <h2> Yolo </h2>
      <UniversityReviewForm onSubmit={showResults}/>
    </div>
  </Provider>
  , document.querySelector('.container'));
