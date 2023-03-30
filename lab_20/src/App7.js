import React, { Component } from "react";

class App7 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: [
                { name: "Red" },
                { name: "Green" },
                { name: "Blue" },
                { name: "Yellow" },
                { name: "Cyan" },
                { name: "Magenta" },
                { name: "White" },
                { name: "Black" }
            ],
            color: null,
        }

        this.handelValue = this.handelValue.bind(this);
    }

    handelValue(event) {
        this.setState({ color: event.target.value });
    }

    render() {
        const list = this.state.colors.map((item, index) => {
            return <option key={index} value={item.name}>
                {item.name}
            </option>
        });

        return (
            <div>
                <select onChange={this.handelValue} defaultValue={this.state.colors[0]} >
                    {list}
                </select>

                <p style={{ backgroundColor: this.state.color }}>
                    Color: {this.state.color}
                </p>
            </div>
        )
    }
}

export default App7;