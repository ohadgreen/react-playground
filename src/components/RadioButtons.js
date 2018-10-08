import React, { Component } from 'react';
import RadioBtn from './RadioBtn';

class RadioButtons extends Component {
    constructor() {
        super();
        this.state = {
            selectedIndex: null,
            selectedValue: null,
            options: ["USA", "UK", "DE"]
        };
    }

    toggleRadioBtn(index) {
        this.setState({
            selectedIndex: index,
            selectedValue: this.state.options[index],
            options: this.state.options
        });
    }

    render() {
        const { options } = this.state;

        const allOptions = options.map((option, i) => {
            return <RadioBtn key={i}
                imgSrc={require(`../resources/${option}.jpg`)}
                isChecked={(this.state.selectedIndex == i)}
                text={option} value={option}
                index={i}
                handler={this.toggleRadioBtn.bind(this)}
            />
        });

        return (
            <div>
                <div className="Radio-Buttons">{allOptions}</div>
                <div>
                    <h4>Selected: {this.state.selectedValue}</h4>
                </div>
            </div>
        );
    }
}



export default RadioButtons;
