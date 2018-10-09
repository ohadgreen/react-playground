import React from 'react';
import DeleteIcon from '@material-ui/icons/DeleteTwoTone';

class PlayerChoice extends React.Component {
    chosenRiderList(chosenRiders) {
       return( chosenRiders.map((r, i) => this.renderRider(r, i)));
    }

    renderRider(rider, i) {
        return (
            <div className="rider" key={i}>                
                <b>{rider.name}</b>
                <p>{rider.nationality}</p>
                <DeleteIcon 
                    onClick={() => this.props.onClick(rider, 'remove')}
                    className={styles.icon} />             
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

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing.unit * 2,
        marginBottom: '50px'
    },
    
});