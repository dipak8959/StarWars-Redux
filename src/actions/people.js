import fetch from 'isomorphic-fetch';
import * as types from '../constants/actionTypes';
import * as API from '../constants/api';



function requestForPeople() {
  return {
    type: types.REQUEST_FOR_PEOPLE,
    isFetching: true,
  };
}

function responseFromPeople(data) {
  return {
    type: types.RESPONSE_FROM_PEOPLE,
    items: data.results,
    count: data.count,
    next: data.next,
    previous: data.previous,
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

export function fetchPeople(param) {
  let fetchURL = new URL(API.PEOPLE);
  Object.keys(param).forEach(key => fetchURL.searchParams.append(key, param[key]));

  return dispatch => {
    dispatch(requestForPeople());
    return fetch(fetchURL)
    .then(handleErrors)
    .then(response => response.json())
    .then(json =>
        dispatch(responseFromPeople(json))
    ).catch(error => {
      throw error;
    });

  };
}
