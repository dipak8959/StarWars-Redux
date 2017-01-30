import {REQUEST_FOR_STARSHIPS, RESPONSE_FROM_STARSHIPS, RESET_STARSHIPS} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  dataReceivedAt: null,
  items: []
};

export default function vehicles(state = initialState, action) {
  switch (action.type) {
    case REQUEST_FOR_STARSHIPS:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case RESPONSE_FROM_STARSHIPS:
      return {
        ...state,
        isFetching: action.isFetching,
        dataReceivedAt: action.dataReceivedAt,
        items: [
          ...state.items, action.item
        ]
      };
    case RESET_STARSHIPS:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
}
