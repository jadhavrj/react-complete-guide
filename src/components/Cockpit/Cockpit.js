import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = ( props ) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request...
        // setTimeout(() => {
        //     alert('Saved Data to Cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log ('[Cockpit.js] Cleaup Work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] Cleaup Work in 2nd useEffect');
        };
    });
    
    let btnClass = '';

    if (props.showPersonsToggle) {
        btnClass = classes.Red;
    }

    const appliedClasses = [];
    if (props.personsLength <= 2) {
      appliedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      appliedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={appliedClasses.join(' ')}>This is working</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>
                    Toggle Persons
            </button>
            <AuthContext.Consumer>
                {( context ) => (
                    <button 
                        onClick={context.login}>
                            Log In
                    </button>
                )}
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);