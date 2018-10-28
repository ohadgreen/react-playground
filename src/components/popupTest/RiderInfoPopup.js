import React from 'react';
import ModalPopup from './ModalPopup';
import './RiderPopup.css';

class PopupParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPop: false,
      rider: {
        name: 'Simon Gerrans',
        nationality: 'Australia',
        team: 'BMC',
        age: 33,
        proWins: 20,
        image: 'simon-gerrans-2018'
      }
    }
  }

  openModal = () => { this.setState({ showPop: true }) }
  closeModal = () => { this.setState({ showPop: false }) }

  togglePopup = () => {
    const newPopupMode = !this.state.showPop;
    this.setState({
      showPop: newPopupMode
    });
  }

  render() {
    return (
      <div>
        <h2>popup component</h2>
        {this.state.rider.name} <br />
        <button onClick={this.openModal}>
          Open the modal
        </button>
        <ModalPopup show={this.state.showPop}
          onClose={this.closeModal}
          riderInfo={this.state.rider}
        >

          {/* <div className="card">
            <div>
              <img src={imgSrc} alt={this.state.rider.name} style={{ alignContent: "left", width: "120px", height: "180px" }}></img>
            </div>
            <div className="rider-details">
              Rider Info:<br />
              name: {this.state.rider.name} <br />
              age: {this.state.rider.age} <br />
              nationality: {this.state.rider.nationality} <br />
              team: {this.state.rider.team} <br />
              pro wins: {this.state.rider.proWins} <br />
            </div>
          </div> */}
        </ModalPopup>
      </div>
    );
  }
}

export default PopupParent;