import React from 'react';

class PlayerChoice extends React.Component {
    chosenRiderList(chosenRiders) {
        chosenRiders.map(r => this.renderRider(r));
    }

    renderRider(rider) {
        return (
        <div className="rider">
                <b>{rider.name}</b>
                <p>{rider.nationality}</p>                
        </div>)
    }

    render() {
        return (
            <div className="race-bet">
                Your Riders Choice:
                <div>
                    {this.chosenRiderList(this.props.chosenRiders)}
                </div>
            </div>
        )
    };
}

export default PlayerChoice;