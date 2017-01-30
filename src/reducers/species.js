import {REQUEST_FOR_SPECIES, RESPONSE_FROM_SPECIES, RESET_SPECIES} from '../constants/actionTypes';

export default function species(state = {}, action) {
  switch (action.type) {
    case REQUEST_FOR_SPECIES:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case RESPONSE_FROM_SPECIES:
      return {
        ...state,
        isFetching: action.isFetching,
        dataReceivedAt: action.dataReceivedAt,
        speciesForPerson: action.item
      };
    case RESET_SPECIES:
      return {
        ...state,
        speciesForPerson: null
      };
    default:
      return state;
  }
}
