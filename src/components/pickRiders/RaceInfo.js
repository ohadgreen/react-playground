import React from 'react';

export const RaceInfo = (props) => {

    return (        
            <div className="race-info">
                <b>{props.raceInfo.raceName}, {props.raceInfo.stage}</b>
                {props.raceInfo.departureCity} - {props.raceInfo.arrivalCity}, {props.raceInfo.distance} km
                <img
                    src={require(`../../resources/images/raceProfiles/${props.raceInfo.profileImage}`)}
                    alt={props.raceInfo.stage}
                    style={{ align: "center", width: "180px", height: "90px" }}
                ></img>
            </div>              
    )
}