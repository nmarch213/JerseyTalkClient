import { FETCH_CORE_INFORMATION, FETCH_SCHOOL } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type){
    case FETCH_CORE_INFORMATION:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_SCHOOL:
      return { ...state, [action.payload.data.id]: action.payload.data }; //key Interpolation
    default:
      return state;
  }
}
