import fetch from 'isomorphic-fetch';
import UrlHelper from '../utils/urlHelper';
import * as types from '../constants/actionTypes';

function requestForSpecies() {
  return {
    type: types.REQUEST_FOR_SPECIES,
    isFetching: true
  };
}

function responseFromSpecies(data) {
  return {
    type: types.RESPONSE_FROM_SPECIES,
    item: data,
    dataReceivedAt: Date.now(),
    isFetching: false
  };
}


export function fetchSpecies(url) {

  return dispatch => {

    dispatch(requestForSpecies());

    return fetch(UrlHelper.convertUrlToHttps(url))
      .then(handleErrors)
      .then(response => response.json())
      .then(json => {
          dispatch(responseFromSpecies(json));
      }).catch(error => {
          throw error;
      });

  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
