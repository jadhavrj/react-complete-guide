import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/Person';

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
    //const persons = this.state.persons.slice();
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

    //const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };

    const persons = [...this.state.persons];
    
    //persons[personIndex].name = event.target.value;

    person.name = event.target.value;
    persons[personIndex] = person;

    // console.log('Was Clicked!');
    this.setState( {persons: persons} );
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherited',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',

    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    let btnClass = '';
    

    if (this.state.showPersonsToggle) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
                return <Person 
					click={() => this.DeletePersonHandler(index)}
					name={person.name}
					age={person.age}
					key={person.id}
					changed={(event) => {this.NameChangedHandler(event, person.id)}} />
          })}
        </div>
      );

      btnClass = classes.Red;

      // style.backgroundColor = 'red';
      // style[':hover']= {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const appliedClasses = [];
    if (this.state.persons.length <= 2) {
      appliedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      appliedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a React App</h1>
        <p className={appliedClasses.join(' ')}>This is working</p>
        <button 
          className={btnClass}
          alt={this.state.showPersonsToggle}
          onClick={this.personsToggleHandler}>
            Toggle Persons
        </button>
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Here is another way to render'));
  }
}

export default App;

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'

// const app = props => {
//   const [ personsState, setPersonsState ] = useState ( {
//     persons: [
//       { name: 'Ruturaj', age: 26 },
//       { name: 'Rohit', age: 27 },
//       { name: 'Rohan', age: 28 }
//     ]
//   } );

//   const [ otherState, setOtherState ] = useState('some other value');

//   console.log(personsState, otherState);

//   const SwitchNameHandler = () => {
//     // console.log('Was Clicked!');
//     setPersonsState( {
//       persons: [
//         { name: 'Ruturaj1', age: 26 },
//         { name: 'Rohit', age: 27 },
//         { name: 'Rohan', age: 29 }
//       ]
//     } )
//   }

//     return (
//       <div className="App">
//         <h1>Hi, I am a React App</h1>
//         <p>This is working</p>
//         <button onClick={SwitchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbie: Traveling</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </div>
//     );

//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Here is another way to render'));
// }

// export default app;

