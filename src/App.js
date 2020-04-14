import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Styled from 'styled-components';
import styled from 'styled-components';

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
    const StyledButton = styled.button`
      background-color: green;
      font: inherit;
      border: none;
      padding: 8px;
      cursor: pointer;
      color: white;
      &:hover {
        background-color: lightgreen;
        color: black;
      }
    `;
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePerson.bind(index)}
                key={person.id}
                change={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightred',
      //   color: 'black',
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton onClick={this.togglePersonHandler}>
          Persons List
        </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
