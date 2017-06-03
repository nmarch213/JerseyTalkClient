import _ from 'lodash';
import { FETCH_CORE_INFORMATION } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_CORE_INFORMATION:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
