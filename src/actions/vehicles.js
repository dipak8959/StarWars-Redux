import fetch from 'isomorphic-fetch';
import UrlHelper from '../utils/urlHelper';
import * as types from '../constants/actionTypes';

function requestForVehicles() {
  return {
    type: types.REQUEST_FOR_VEHICLES,
    isFetching: true
  };
}

function responseFromVehicles(data) {
  return {
    type: types.RESPONSE_FROM_VEHICLES,
    item: data,
    dataReceivedAt: Date.now(),
    isFetching: false
  };
}

export function fetchVehicles(urls) {

  return dispatch => {

    dispatch(requestForVehicles());

      urls.forEach((url) => {

        return fetch(UrlHelper.convertUrlToHttps(url))
        .then(handleErrors)
        .then(response => response.json())
        .then(json => {
          dispatch(responseFromVehicles(json));
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
