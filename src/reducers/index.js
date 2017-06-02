import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import institutions from "./reducer_institutions";
import school from "./reducer_school";

const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  institutions: institutions, //The list of institutions from DB
  school: school
});

export default rootReducer;
