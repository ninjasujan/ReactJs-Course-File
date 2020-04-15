import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[pesons.js] getderivedStateFromProps');
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Perosn.js] should update');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Perosns.js] getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    console.log('[Persons.js] componentDidMount');
  }
  render() {
    console.log('[Persons.js] rendering..');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          deleted={this.props.deleted.bind(index)}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
