import React, { Component } from 'react';
import './App.css';
import RaceBet from './components/pickRiders/RaceBet';
// import RadioButtons from './components/RadioButtons';
// import SimpleSelect from './components/SimpleSelect';
// import ReactSelectTest from './components/ReactSelectTest';
// import ChildSelect from './components/ChildSelect';
// import VirtSelect from './components/VirtualizedSelect';

class App extends Component {
  render() {
    return (
      <div>
        <RaceBet />
      </div>
    );
  }
}

export default App;
