import React from 'react';
import { teamRiders } from '../../resources/sampleData/teamRiders';
import PlayerChoice from './PlayerChoice';
import TeamList from './TeamList';

class RaceBet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamRiders: teamRiders,
            chosenRiders: []
        };
    }

    clickRider(clickedRider) {
        let ridersFilter = this.state.teamRiders;
        let chosenRidersUpdate = this.state.chosenRiders;
        if (this.state.chosenRiders.length < 3) {
            console.log('rider clicked: ' + clickedRider.id.toString());            
            ridersFilter.forEach(team => {
                team.riders.forEach(rider => {
                    if (rider.id === clickedRider.id) {
                        rider.chosen = true;
                        console.log('chosen name: ' + rider.chosen);
                    }
                })
            })
            chosenRidersUpdate.push(clickedRider);
        };

        this.setState({
            teamRiders: ridersFilter,
            chosenRiders: chosenRidersUpdate
        })
    }

    render() {
        return (
            <div>
                <PlayerChoice
                    chosenRiders={this.state.chosenRiders}
                />
                <TeamList
                    teamRiders={this.state.teamRiders}
                    onClick={this.clickRider.bind(this)}
                />
            </div>)
    }
}

export default RaceBet;