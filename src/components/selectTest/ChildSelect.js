import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'pet', label: 'Pet' },
    { value: 'sports', label: 'Sports' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'travel', label: 'Travel' }
];

class ChildSelect extends React.Component{    

    state = {
        selectedOption: null,
    }

    handleChange = (val) => {     
        this.setState({ selectedOption: val });                  
        console.log("chosen value: ", JSON.stringify(val));
    };

    render() {  
        const { selectedOption } = this.state;
        return (
            <div>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
            </div>
        );
    }
}

export default ChildSelect;