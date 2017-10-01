import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Table, thead, th, tr, tbody, td, Popover, OverlayTrigger, Pagination } from 'react-bootstrap';
import * as actions from '../actions/dataActions';

export class App extends Component {
  constructor(props) {
   super(props);
  }

  getPlanetData(url){
      this.props.actions.loadPlanet(url.split("/")[5]);
  }

  getPeopleData(eventKey){
    this.props.actions.loadPeople(eventKey);
  }

  render() {
    const { people, planet, activePage } = this.props.people;
    const popoverPlanet = (
        planet ? (
      <Popover id="popover-trigger-click-root-close" title={planet.name} >
        <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>diameter</th>
        <th>climate</th>
        <th>population</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.population}</td>
      </tr>
      </tbody>
      </Table>
      </Popover>
    ) : null
    );
    return (
      <div>
        <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>name</th>
        <th>height</th>
        <th>mass</th>
        <th>created</th>
        <th>edited</th>
        <th>planet</th>
      </tr>
    </thead>
    <tbody>
      {
        people ? (people.map((data, i) => {
        return <tr id={data.name}>
        <td>{(10*(activePage-1))+i}</td>
        <td>{data.name}</td>
        <td>{data.height}</td>
        <td>{data.mass}</td>
        <td>{data.created}</td>
        <td>{data.edited}</td>
        <OverlayTrigger trigger="click" rootClose placement="left" overlay={popoverPlanet}>
        <td onClick={() => this.getPlanetData(data.homeworld)}><a>{data.url}</a></td>
        </OverlayTrigger>
      </tr>})) : null
      }
    </tbody>
  </Table>
  <div style={{paddingLeft: (0.4)*window.innerWidth}}>
  <Pagination
          bsSize="medium"
          items={9}
          activePage={activePage}
          onSelect={(eventKey) => this.getPeopleData(eventKey)} />
  </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
    return {
      people: state.people,
      palnet: state.planet
    }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
