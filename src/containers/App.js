import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id:'xfv', name: 'Ruturaj', age: 26 },
      { id:'nbmbn', name: 'Rohit', age: 27 },
      { id:'dsf', name: 'Rohan', age: 28 }
      ],
    otherState: 'some other value',
    showPersonsToggle: false
  }

  DeletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  personsToggleHandler = () => {
    const showPersons = this.state.showPersonsToggle;
    this.setState({showPersonsToggle: !showPersons});
  }

  NameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    const persons = [...this.state.persons];

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  render() {
    let persons = null;

    if (this.state.showPersonsToggle) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.DeletePersonHandler}
          changed={this.NameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersonsToggle={this.state.showPersonsToggle}
          persons={this.state.persons}
          clicked={this.personsToggleHandler} />
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Here is another way to render'));
  }
}

export default App;