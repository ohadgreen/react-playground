import React from 'react';
import Select from 'react-select';

class ReactSelectTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                { value: 'jer', label: 'Jerusalem' },
                { value: 'tlv', label: 'Tel-Aviv' },
                { value: 'hfa', label: 'Haifa' },
                { value: 'bsh', label: 'Beer-Sheva' }
            ],
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
        const customControlStyles = base => ({
            height: 50,
            width: 300
        });

        const { options, selectedOption } = this.state;        
        // const { optionsToRender } = this.state.options;
        let mySelection = selectedOption ? selectedOption.label : 'no selection yet';

        return (
            <div>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    autosize={false}
                    style={customControlStyles}
                />
                <p>selected value: { mySelection }</p>
                <button onClick={this.onClick}>click</button>
            </div>
        );
    }
}

export default ReactSelectTest;