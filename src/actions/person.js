import fetch from 'isomorphic-fetch';
import * as types from '../constants/actionTypes';
import * as API from '../constants/api';

import { fetchSpecies } from './species';
import { fetchVehicles } from './vehicles';
import { fetchStarships } from './starships';
import { fetchFilms } from './films';
import { fetchHomeWorld} from './homeworld';

function requestForPerson() {
  return {
    type: types.REQUEST_FOR_PERSON,
    isFetching: true,
    item: null
  };
}

function responseFromPerson(data) {
  return {
    type: types.RESPONSE_FROM_PERSON,
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
export function fetchPerson(id) {

  return dispatch => {

    dispatch(requestForPerson());

    return fetch(`${API.PERSON}${id}`)
      .then(handleErrors)
      .then(response => response.json())
      .then(json => {
          dispatch(responseFromPerson(json));
          dispatch(fetchSpecies(json.species[0]));
          dispatch(fetchVehicles(json.vehicles));
          dispatch(fetchStarships(json.starships));
          dispatch(fetchFilms(json.films));
          dispatch(fetchHomeWorld(json.homeworld));
        }
      ).catch(error => {
          throw error;
      });
  };
}
