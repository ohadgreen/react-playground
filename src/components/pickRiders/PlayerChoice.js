import React from "react";
import { RiderTest } from "./RiderTest";
import "./chosenRider.css";
// import DeleteIcon from "@material-ui/icons/DeleteTwoTone";

class PlayerChoice extends React.Component {
  chosenRiderList(chosenRiders) {
    // return chosenRiders.map((r, i) => this.renderRider(r, i));

    const isFirstChoice = false;
    return chosenRiders.map((rider, i) => {
      const currentchoiceParams = choiceParams[i];
      let message;
      if (rider === "tbd" && isFirstChoice) {
        message = "please choose " + currentchoiceParams.header;
      }
      return (
        <div className="choice" key={i}>
          <div>{currentchoiceParams.header}</div>
          <div>
            {rider === "tbd" ? (
              message
            ) : (
              <RiderTest
                key={i}
                name={rider.name}
                nationality={rider.nationality}
                id={rider.id}
                onClick={this.props.onClick.bind(this)}
              />
            )}
          </div>
        </div>
      );
    });
  }

  /*  renderRider(rider, i) {
      const choice = "Choose " + (i+1);
      return (<div className="chioce" key={i}>
      <div></div>
      {
      rider === "tbd" ? choice : 
      <RiderTest
          key={i}
          name={rider.name}
          nationality={rider.nationality}
          id={rider.id}
          onClick={this.props.onClick.bind(this)}
        />
      }</div>)
    } */

  render() {
    return (
      <div className="race-bet">
        Your Riders Choice:
        {this.chosenRiderList(this.props.chosenRiders)}
      </div>
    );
  }
}

export default PlayerChoice;

const choiceParams = [
  {
    rank: 1,
    header: "winner"
  },
  {
    rank: 2,
    header: "2nd place"
  },
  {
    rank: 3,
    header: "3rd place"
  }
];
