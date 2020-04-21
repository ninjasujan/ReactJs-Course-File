import classes from './Cockpit.css';
import React, { useEffect, useRef } from 'react';

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffects');
    // can send HTTP request
    // setTimeout(() => {
    //   alert('Component loaded.!');
    // }, 1000);

    toggleButtonRef.current.click();

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
      <button ref={toggleButtonRef} className={btnClass} onClick={props.toggle}>
        Persons List
      </button>
      <button onClick={props.login}>LogIn</button>
    </div>
  );
};

export default React.memo(cockpit);