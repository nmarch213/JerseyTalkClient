import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import institutions from "./reducer_institutions";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  institutions: institutions, //The list of institutions from DB
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
