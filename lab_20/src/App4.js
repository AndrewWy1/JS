import React, { Component } from "react";

class App4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: [
                { name: "New York" },
                { name: "Los Angeles" },
                { name: "Chicago" },
                { name: "Houston" },
                { name: "Phoenix" },
            ],
            value: "New York",
        }

        this.handelValue = this.handelValue.bind(this);
    }

    handelValue(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const list = this.state.cities.map((item, index) => {
            return <option key={index} value={item.name}>
                {item.name}
            </option>
        });

        return (
            <div>
                <select onChange={this.handelValue} defaultValue={this.state.cities[0]} >
                    {list}
                </select>

                <p>
                    City: {this.state.value}
                </p>
            </div>
        )
    }
}

export default App4;