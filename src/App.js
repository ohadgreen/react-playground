import React, { Component } from 'react';
import './App.css';
import RaceBet from './components/pickRiders/RaceBet';
import PopupParent from './components/popupTest/RiderInfoPopup'

class App extends Component {
  render() {
    return (
      <div>
        <PopupParent />
      </div>
    );
  }
}

export default App;
