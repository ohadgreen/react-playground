import React from 'react';
import { teamRiders } from '../../resources/sampleData/teamRiders';
import { raceInfo } from '../../resources/sampleData/raceInfo';
import { RaceInfo } from './RaceInfo';
import PlayerChoice from './PlayerChoice';
import TeamList from './TeamList';

class RaceBet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            raceInfo: raceInfo,
            teamRiders: teamRiders,
            chosenRiders: []
        };
    }

    addOrRemoveRiderToBetList(clickedRider, addRemove) {
        console.log(`rider ${clickedRider.name} to ${addRemove}`);
        const toAdd = (addRemove === 'add');

        let teamRidersUpdate = this.state.teamRiders;
        let chosenRidersUpdate = this.state.chosenRiders;
        if (this.state.chosenRiders.length < 3) {
            teamRidersUpdate.forEach(team => {
                team.riders.forEach(rider => {
                    if (rider.id === clickedRider.id) {
                        rider.chosen = toAdd;
                    }
                })
            })
            if (toAdd) {
                chosenRidersUpdate.push(clickedRider);
            }
            else{ //remove
                chosenRidersUpdate = chosenRidersUpdate.filter(r => r.id !== clickedRider.id);
            }
        };

        this.setState({
            teamRiders: teamRidersUpdate,
            chosenRiders: chosenRidersUpdate
        })
    }

    render() {
        return (
            <div>
                <RaceInfo raceInfo={this.state.raceInfo}/>
                <PlayerChoice
                    chosenRiders={this.state.chosenRiders}
                    onClick={this.addOrRemoveRiderToBetList.bind(this)}
                />
                <TeamList
                    teamRiders={this.state.teamRiders}
                    onClick={this.addOrRemoveRiderToBetList.bind(this)}
                />
            </div>)
    }
}

export default RaceBet;