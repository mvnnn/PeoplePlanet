import * as types from './actionTypes';
import DataApi from '../api/dataApi';

export function loadPeopleSuccess(data, activePage) {
  console.log(data.results);
  const people = data.results;
  return {type: types.LOAD_PEOPLE_SUCCESS, people, activePage};
}

export function loadPlanetSuccess(planet) {
  console.log(planet);
  return {type: types.LOAD_PLANET_SUCCESS, planet};
}

export function loadPeople(activePage) {
  return function(dispatch) {
    return DataApi.getPeopleData(activePage).then(data => {
      dispatch(loadPeopleSuccess(data, activePage));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPlanet(planetId) {
  return function(dispatch) {
    return DataApi.getPlanetData(planetId).then(planet => {
      dispatch(loadPlanetSuccess(planet));
    }).catch(error => {
      throw(error);
    });
  };
}
