import {REQUEST_FOR_FILMS, RESPONSE_FROM_FILMS, RESET_FILMS} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  dataReceivedAt: null,
  items: []
};

export default function films(state = initialState, action) {
  switch (action.type) {
    case REQUEST_FOR_FILMS:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case RESPONSE_FROM_FILMS:
      return {
        ...state,
        isFetching: action.isFetching,
        dataReceivedAt: action.dataReceivedAt,
        items: [
          ...state.items, action.item
        ]
      };
    case RESET_FILMS:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
}
