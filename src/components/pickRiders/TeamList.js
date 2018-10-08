import React from 'react';
import Team from './Team';

class TeamList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: teams,
        };
    }

    renderTeam(team) {
        console.log(team.name);
        return (
            <Team
                key={team.name}
                name={team.name}
                img={team.img}
                riders={team.riders}
            />
        )
    }

    teamList() {
        return this.state.teams.map(t => this.renderTeam(t));
    }

    render() {
        return (
            <div>
                <p>Riders List</p>
                <div className="riders-select">
                    {this.teamList()}
                </div>
            </div>
        )
    }
}


export default TeamList;

const teams = [
    {
        name: "Sky",
        img: "http://www.steephill.tv/2018/teams/jersey-thumbs/SKY.jpg",
        riders :[
            { name: "Alejandro Valverde", nationality: "Spain" },
            { name: "Chris Froom", nationality: "England" },
            { name: "Rigoberto Uran", nationality: "Colombia" },
            { name: "Romain bardet", nationality: "France" },
            { name: "Ilnur Zakarin", nationality: "Russia" },
            { name: "Richie Porte", nationality: "Australia" },
            { name: "Tom Dumolin", nationality: "Netherlands" },
            { name: "Greg Van-Avermat", nationality: "Belgium" },
        ]
    },
    {
        name: "BMC",
        img: "http://www.steephill.tv/2018/teams/jersey-thumbs/BMC.jpg",
        riders :[
            { name: "Teejay Van-Garderen", nationality: "USA" },
            { name: "Lars Boom", nationality: "Belgium" },
            { name: "Romain bardet", nationality: "France" },
            { name: "Ilnur Zakarin", nationality: "Russia" },
            { name: "Richie Porte", nationality: "Australia" },
            { name: "Tom Dumolin", nationality: "Netherlands" },
        ]
    },
]