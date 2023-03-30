import React, { Component } from "react";

class App5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
        }

        this.handelValue = this.handelValue.bind(this);
    }

    handelValue(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <div>
                    <p><input type="radio" value="1" name="number" onChange={this.handelValue}/>1</p>
                    <p><input type="radio" value="2" name="number" onChange={this.handelValue}/>2</p>
                    <p><input type="radio" value="3" name="number" onChange={this.handelValue}/>3</p>
                </div>

                <p>
                    RadioSelect: {this.state.value}
                </p>
            </div>
        )
    }
}

export default App5;