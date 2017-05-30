import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import institutions from "./reducer_institutions";

const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  institutions: institutions, //The list of institutions from DB
});

export default rootReducer;
