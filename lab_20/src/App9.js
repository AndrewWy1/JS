import React, { Component } from "react";

class App9 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "1",
        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(event) {
        this.setState({ value: event.target.value })
    }


    render() {
        return (
            <div>
                <select defaultValue={this.state.value} onChange={this.handleSelectChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <p>{this.state.value == "1" ? 1 : null}</p>
                <p>{this.state.value == "2" ? 2 : null}</p>
                <p>{this.state.value == "3" ? 3 : null}</p>
            </div>
        );
    }
}

export default App9;
