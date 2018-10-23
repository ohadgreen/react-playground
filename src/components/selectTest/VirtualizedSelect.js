import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import _ from 'lodash';
import 'react-virtualized-select/styles.css';
import 'react-virtualized-select/node_modules/react-select/dist/react-select.css';
import 'react-virtualized/styles.css';

class VirtSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                { value: 'jer', label: 'Jerusalem' },
                { value: 'tlv', label: 'Tel-Aviv' },
                { value: 'hfa', label: 'Haifa' },
                { value: 'bsh', label: 'Beer-Sheva' },
                { value: 'bet-shean', label: 'Bet-Shean' },
                { value: 'bet-yaacov', label: 'Beer-Yaacov' },
                { value: 'avivim', label: 'Avivim' },
            ],
            localeArray: ['US', 'EN', 'DE', 'FR', 'IT', 'ES'],
            selectedOption: '',
        };
        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (val) => {
        this.setState({ selectedOption: val });
    }

    onClick() {
        console.log(this.state.selectedOption);
        alert("selected value1: " + this.state.selectedOption.label);
    }

    render() {
        const { options, selectedOption } = this.state;
        // const { optionsToRender } = this.state.options;
        let mySelection = selectedOption ? selectedOption.label : 'no selection yet';

        return (
            <div>
                <VirtualizedSelect
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    style={{ width: "50%" }}
                />
                <p>selected value: {mySelection}</p>
                <button onClick={this.onClick}>click</button>
            </div>
        );
    }
}

export default VirtSelect;