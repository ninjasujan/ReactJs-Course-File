import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../../components/context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPerson: false,
    changeCounter: 0,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] component did mount.!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[app.js] should component updated.!');
    return true;
  }

  nameChangedHandler = (event, id) => {
    console.log('name change');
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    this.setState((preState, props) => {
      return {
        persons: persons,
        changeCounter: preState.changeCounter + 1,
      };
    });
  };

  togglePersonHandler = () => {
    const currentState = this.state.showPerson;
    console.log(currentState);
    this.setState({
      showPerson: !currentState,
    });
  };

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  loginHandler = () => {
    console.log('Authentication......');
    this.setState({ authenticated: true });
  };

  render() {
    console.log('[App.js] rendered.!');
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          deleted={this.deletePerson}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <AuthContext.provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          <Cockpit
            title={this.props.appTitle}
            showPerson={this.state.showPerson}
            personsLength={this.state.persons.length}
            toggle={this.togglePersonHandler}
            login={this.loginHandler}
          />
          {persons}
        </AuthContext.provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
