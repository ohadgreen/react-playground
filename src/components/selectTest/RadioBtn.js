import React, { Component } from 'react';

class RadioBtn extends Component {

    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.handler(this.props.index);
    }

    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>
                <div className={this.props.isChecked ? "radiobtn checked" : "radiobtn unchecked"} data-value={this.props.value}></div>
                <label className="container">
                    {/* {this.props.text} */}
                    <img src={this.props.imgSrc}/>
                </label>
            </div>
        );
    }
}

export default RadioBtn;
