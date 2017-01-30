import fetch from 'isomorphic-fetch';
import UrlHelper from '../utils/urlHelper';
import * as types from '../constants/actionTypes';

function requestForHomeWorld() {
  return {
    type: types.REQUEST_FOR_HOMEWORLD,
    isFetching: true
  };
}

function responseFromHomeWorld(data) {
  return {
    type: types.RESPONSE_FROM_HOMEWORLD,
    item: data,
    dataReceivedAt: Date.now(),
    isFetching: false
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchHomeWorld(urls) {

  return dispatch => {
    dispatch(requestForHomeWorld());
        return fetch(UrlHelper.convertUrlToHttps(urls))
        .then(handleErrors)
        .then(response => response.json())
        .then(json => {
          dispatch(responseFromHomeWorld(json));
        }).catch(error => {
          throw error;
        });
  };
}
