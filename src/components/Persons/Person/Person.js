import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import Aux from '../../hoc/Auxiliary';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor() {
    super();
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering');
    return (
      <Aux>
        {this.props.isAuth ? <p>Authenticated.!</p> : <p>Please login.!</p>}

        <p onClick={this.props.deleted}>
          I'm {this.props.name} and I am {this.props.age} years old.!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEle) => (this.inputElement = inputEle)}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

// helps us to check props is valid one if invalid data sent by the props then it will
// gives warning
// works on both functional and class based component

Person.propTypes = {
  deleted: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  deleted: PropTypes.func,
};

export default withClass(Person, classes.person);
