import React from 'react';

class SimpleSelect extends React.Component {
    state = {
        options: [
            { name: 'Select…', value: null,},
            { name: 'One', value: 1,},
            { name: 'Two', value: 2, },
            { name: 'Three', value: 3, },
            { name: 'Four', value: 4, },           
        ],
        chosenValue: '?',
    };

    handleChange = (event) => {
        this.setState({ chosenValue: event.target.value });
        let chosenValue = this.state.chosenValue;
        console.log("chosen number: ", chosenValue);
    };

    render() {
        const { options, value } = this.state;
        return (
            <div>
                <select onChange={this.handleChange} value={value}>
                    {options.map(item => (
                        <option key={item.value} value={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>               
            </div>
        );
    }
}

export default SimpleSelect;