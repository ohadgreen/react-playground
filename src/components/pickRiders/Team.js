import React from 'react';
import { Rider } from './Rider';

class Team extends React.Component {
    renderRider(rider) {
        return (
            <Rider
                key={rider.name}
                name={rider.name}
                nationality={rider.nationality}
            />
        )
    }

    ridersRow() {
        return this.props.riders.map(r => this.renderRider(r));
    }

    render() {
        return (
            <div className="team-container">
                <div className="team-sign">
                    <b>{this.props.name}</b>
                    <img src={this.props.img} alt={this.props.name} style={{ align: "right", width: "120px", height: "120px" }}></img>
                </div>
                <div className="riders-wrapper">{this.ridersRow()}</div>
            </div>
        )
    }
}

export default Team;