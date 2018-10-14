import React from 'react';
import './RaceInfo.css';

export const RaceInfo = (props) => {

    return (
        <div className="race-info">
            <div><b>{props.raceInfo.raceName}, {props.raceInfo.stage}</b></div>
            <div>{props.raceInfo.departureCity} - {props.raceInfo.arrivalCity}, {props.raceInfo.distance} km </div>
            <div><img
                src={require(`../../resources/images/raceProfiles/${props.raceInfo.profileImage}`)}
                alt={props.raceInfo.stage}
                style={{ align: "center", width: "180px", height: "90px" }}
            ></img>
            </div>
        </div>
    )
}