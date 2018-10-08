import React, { Component } from 'react';
import './App.css';
import TeamList from './components/pickRiders/TeamList';
// import RadioButtons from './components/RadioButtons';
// import SimpleSelect from './components/SimpleSelect';
// import ReactSelectTest from './components/ReactSelectTest';
// import ChildSelect from './components/ChildSelect';
// import VirtSelect from './components/VirtualizedSelect';

class App extends Component {
  render() {
    return (
      <div>
        <TeamList />      
      </div>
    );
  }
}

export default App;
