import fetch from 'isomorphic-fetch';
import UrlHelper from '../utils/urlHelper';
import * as types from '../constants/actionTypes';

function requestForStarships() {
  return {
    type: types.REQUEST_FOR_STARSHIPS,
    isFetching: true
  };
}

function responseFromStarships(data) {
  return {
    type: types.RESPONSE_FROM_STARSHIPS,
    item: data,
    dataReceivedAt: Date.now(),
    isFetching: false
  };
}

export function fetchStarships(urls) {

  return dispatch => {

    dispatch(requestForStarships());

    urls.forEach((url) => {

      return fetch(UrlHelper.convertUrlToHttps(url))
        .then(handleErrors)
        .then(response => response.json())
        .then(json => {
          dispatch(responseFromStarships(json));
        }).catch(error => {
            throw error;
        });
    });

  };

}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
