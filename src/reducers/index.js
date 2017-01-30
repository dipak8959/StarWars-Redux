import { combineReducers } from 'redux';
import people from './people';
import person from './person';
import species from './species';
import vehicles from './vehicles';
import starships from './starships';
import films from './films';
import homeworld from './homeworld';
import {routerReducer} from 'react-router-redux';

const appReducer = combineReducers({
  people,
  person,
  species,
  vehicles,
  starships,
  films,
  homeworld,
  routing: routerReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = {
      people: state.people
    };
  }

  return appReducer(state, action);
};

export default rootReducer;
