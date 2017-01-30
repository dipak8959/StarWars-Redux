import fetch from 'isomorphic-fetch';
import UrlHelper from '../utils/urlHelper';
import * as types from '../constants/actionTypes';

function requestForFilms() {
  return {
    type: types.REQUEST_FOR_FILMS,
    isFetching: true
  };
}

function responseFromFilms(data) {
  return {
    type: types.RESPONSE_FROM_FILMS,
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

export function fetchFilms(urls) {

  return dispatch => {

    dispatch(requestForFilms());

      urls.forEach((url) => {

        return fetch(UrlHelper.convertUrlToHttps(url))
        .then(handleErrors)
        .then(response => response.json())
        .then(json => {
          dispatch(responseFromFilms(json));
        }).catch(error => {
          throw error;
        });
      });

  };

}
