import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import institutions from './reducer_institutions';
import school from './reducer_school';

const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  institutions, // The list of institutions from DB
  school,
});

export default rootReducer;
