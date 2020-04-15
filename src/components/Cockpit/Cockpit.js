import classes from './Cockpit.css';
import React, { useEffect } from 'react';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffects');
    // can send HTTP request
    setTimeout(() => {
      alert('Component loaded.!');
    }, 1000);
    return () => {
      console.log('Clean up work');
    };
  }, []);

  useEffect(() => {
    console.log('[cockpit.js] cleanup work.!');
  });
  // no dependencies so it will run only when dependecies changes

  const classList = [];
  let btnClass = '';
  if (props.showPerson) {
    btnClass = classes.red;
  }
  if (props.personsLength <= 2) {
    classList.push(classes.red);
  }
  if (props.personsLength <= 1) {
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

export default React.memo(cockpit);
