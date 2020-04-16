import React, { PureComponent } from 'react';
import Person from './Person/Person';
import AuthContext from '../context/auth-context';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[pesons.js] getderivedStateFromProps');
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Perosn.js] should update');
  //   if (nextProps.persons !== this.props.persons) return true;
  //   else return false;
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Perosns.js] getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    console.log('[Persons.js] componentDidMount');
  }
  componentWillUnmount() {
    console.log('[personjs.js] component will unmount');
  }
  render() {
    console.log('[Persons.js] rendering..');
    return (
      <AuthContext.Consumer>
        {() =>
          this.props.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                deleted={this.props.deleted.bind(index)}
                changed={(event) => this.props.changed(event, person.id)}
                isAuth={this.props.isAuthenticated}
              />
            );
          })
        }
      </AuthContext.Consumer>
    );
  }
}

export default Persons;
