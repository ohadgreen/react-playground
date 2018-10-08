import React from 'react';
import { Rider } from './Rider';

class Team extends React.Component {
    renderRider(rider, i) {
        return (
            <Rider
                key={i}
                name={rider.name}
                nationality={rider.nationality}
                id={rider.id}
                onClick={this.props.onClick.bind(this)}
            />
        )
    }

    ridersRow() {
        const ridersToChoose = this.props.riders.filter(rider => rider.chosen === false);
        return ridersToChoose.map((r, i) => this.renderRider(r, i));
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