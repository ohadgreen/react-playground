import React from "react";
import { RiderTest } from './RiderTest';
import DeleteIcon from "@material-ui/icons/DeleteTwoTone";
import "./chosenRider.css";

class PlayerChoice extends React.Component {
  chosenRiderList(chosenRiders) {
    return chosenRiders.map((r, i) => this.renderRider(r, i));
  }

  renderRider(rider, i) {
    if (rider === "tbd") {
      return <div>TBD</div>;
    } else {
      return (
        <RiderTest
          key={i}
          name={rider.name}
          nationality={rider.nationality}
          id={rider.id}
          onClick={this.props.onClick.bind(this)}
        />
      );
    }

    /* return (
            <div className="rider" key={i}>
                <b>{rider.name}</b>
                <p>{rider.nationality}</p>
                <DeleteIcon
                    onClick={() => this.props.onClick(rider, 'remove')}
                    className={styles.icon} />
            </div>) */
  }

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

