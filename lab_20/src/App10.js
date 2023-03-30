import React, { Component } from "react";

class App10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            selectOptions: [
                { value: "Value1", text: "Value1" },
            ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleClick() {
        const newOption = {
            value: this.state.inputValue,
            text: this.state.inputValue,
        };
        this.setState((prevState) => ({
            selectOptions: [...prevState.selectOptions, newOption],
        }));
    }

    render() {
        const options = this.state.selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
                {option.text}
            </option>
        ));

        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} />

                <button onClick={this.handleClick}>Add to Select</button>

                <select>{options}</select>
            </div>
        );
    }
}

export default App10;
