import * as types from '../actions/actionTypes';
import initialState from './initialState';
// import {browserHistory} from 'react-router';


export default function projectReducer(state = initialState.people, action) {
  switch(action.type) {
    case types.LOAD_PEOPLE_SUCCESS:
    return {
      people: action.people,
      activePage: action.activePage
    }

    case types.LOAD_PLANET_SUCCESS:
    return {
      people: state.people,
      planet: action.planet,
      activePage: state.activePage
    }

    default:
      return state;
  }
}
