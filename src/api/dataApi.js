import fetch from 'isomorphic-fetch';

class ProjectApi {
  static getPeopleData(activePage) {
    return fetch(`https://swapi.co/api/people/?page=${activePage}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then(response => {
      console.log(response);
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getPlanetData(planetId) {
    return fetch(`https://swapi.co/api/planets/${planetId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then(response => {
      console.log(response);
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default ProjectApi;
