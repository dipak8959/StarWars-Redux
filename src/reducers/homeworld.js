import {REQUEST_FOR_HOMEWORLD, RESPONSE_FROM_HOMEWORLD, RESET_HOMEWORLD} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  dataReceivedAt: null,
  items: []
};

export default function homeworld(state = initialState, action) {
  switch (action.type) {
    case REQUEST_FOR_HOMEWORLD:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case RESPONSE_FROM_HOMEWORLD:
      return {
        ...state,
        isFetching: action.isFetching,
        dataReceivedAt: action.dataReceivedAt,
        homeForPerson : action.item
      };
    case RESET_HOMEWORLD:
      return {
        ...state,
        homeForPerson : null
      };
    default:
      return state;
  }
}
