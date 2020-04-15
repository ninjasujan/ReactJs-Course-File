import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering');
    return (
      <Fragment>
        <p onClick={this.props.deleted}>
          I'm {this.props.name} and I am {this.props.age} years old.!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} />
      </Fragment>
    );
  }
}

export default Person;
