import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass/withClass';
import Aux from '../hoc/Auxiliary/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  state = {
    persons: [
      { id:'xfv', name: 'Ruturaj', age: 26 },
      { id:'nbmbn', name: 'Rohit', age: 27 },
      { id:'dsf', name: 'Rohan', age: 28 }
      ],
    otherState: 'some other value',
    showPersonsToggle: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    let persons = null;

    if (this.state.showPersonsToggle) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.DeletePersonHandler}
          changed={this.NameChangedHandler}
        />
      );
    }

    return (
      <Aux>
        <button 
          onClick={() => {
            this.setState({showCockpit: !this.state.showCockpit});
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersonsToggle={this.state.showPersonsToggle}
              personsLength={this.state.persons.length}
              clicked={this.personsToggleHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Here is another way to render'));
  }
}

export default withClass(App, classes.App);