import classes from './Cockpit.css';
import React from 'react';

const cockpit = (props) => {
  const classList = [];
  let btnClass = '';
  if (props.showPerson) {
    btnClass = classes.red;
  }
  if (props.persons.length <= 2) {
    classList.push(classes.red);
  }
  if (props.persons.length <= 1) {
    classList.push(classes.bold);
  }
  return (
    <div className={classes.cockpit}>
      <h1>{props.title}</h1>
      <p className={classList.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.toggle}>
        Persons List
      </button>
    </div>
  );
};

export default cockpit;
