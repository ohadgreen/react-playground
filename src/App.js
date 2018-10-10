import React, { Component } from 'react';
import './App.css';
import RaceBet from './components/pickRiders/RaceBet';
import { RiderTest } from './components/ComponentTest/RiderTest';

class App extends Component {
  render() {
    return (
      <div>
        <RiderTest />
      </div>
    );
  }
}

export default App;
