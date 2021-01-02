import React from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {
    
    let btnClass = '';

    if (props.showPersonsToggle) {
        btnClass = classes.Red;
    }

    const appliedClasses = [];
    if (props.persons.length <= 2) {
      appliedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      appliedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am a React App</h1>
            <p className={appliedClasses.join(' ')}>This is working</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>
                    Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;