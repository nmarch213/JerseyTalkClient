import { FETCH_SCHOOL } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type){
    case FETCH_SCHOOL:
      return action.payload.data;
    default:
      return state;
  }
}
