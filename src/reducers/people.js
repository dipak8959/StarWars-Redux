import {REQUEST_FOR_PEOPLE, RESPONSE_FROM_PEOPLE} from '../constants/actionTypes';

export default function people(state = {isFetching: false}, action) {
  switch (action.type) {
    case REQUEST_FOR_PEOPLE:
      return {
        ...state, // entire state using rest parameter of ES6
        isFetching: action.isFetching,
      };
    case RESPONSE_FROM_PEOPLE:
      return {
        ...state, // entire state using rest parameter of ES6
        isFetching: action.isFetching,
        items:  action.items,
        count: action.count,
        next: action.next,
        previous: action.previous,
        dataReceivedAt: action.dataReceivedAt,
      };
    default:
      return state;
  }
}
