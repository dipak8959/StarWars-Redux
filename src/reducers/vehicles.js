import {REQUEST_FOR_VEHICLES, RESPONSE_FROM_VEHICLES, RESET_VEHICLES} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  dataReceivedAt: null,
  items: []
};

export default function vehicles(state = initialState, action) {
  switch (action.type) {
    case REQUEST_FOR_VEHICLES:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case RESPONSE_FROM_VEHICLES:
      return {
        ...state,
        isFetching: action.isFetching,
        dataReceivedAt: action.dataReceivedAt,
        items: [
          ...state.items, action.item
        ]
      };
    case RESET_VEHICLES:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
}
