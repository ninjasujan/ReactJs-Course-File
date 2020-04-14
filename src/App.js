import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPerson: false,
  };

  nameChangedHandler = (event, id) => {
    console.log('name change');
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    this.setState({
      persons: persons,
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

  render() {
    let persons = null;
    let btnClass = [classes.Button];
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={this.deletePerson.bind(index)}
                change={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass.push(classes.Red);
    }

    const classList = [];
    if (this.state.persons.length <= 2) {
      classList.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      classList.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classList.join(' ')}>This is really working!</p>
        <button
          className={btnClass.join(' ')}
          onClick={this.togglePersonHandler}
        >
          Persons List
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
