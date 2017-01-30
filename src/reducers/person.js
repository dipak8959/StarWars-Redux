import {REQUEST_FOR_PERSON, RESPONSE_FROM_PERSON, RESET_PERSON} from '../constants/actionTypes';

export default function person(state = {}, action) {
  switch (action.type) {
    case REQUEST_FOR_PERSON:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case RESPONSE_FROM_PERSON:
      return {
        ...state,
        isFetching: action.isFetching,
        item: action.item,        
      };
    case RESET_PERSON:
      return {
        ...state,
        item: null
      };
    default:
      return state;
  }
}
