import { FETCH_CORE_INFORMATION } from '../actions/index';

const INITIAL_STATE = { all: [], institutions: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case FETCH_CORE_INFORMATION:
      return { ...state, all: action.payload.data}
    default:
      return state;
  }
}
