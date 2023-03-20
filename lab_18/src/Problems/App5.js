import React, { Component } from "react";

class App5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
            name: "Іван"
        }

        this.Change = this.Change.bind(this);
    }
    Change() {
        if (this.state.show)
            return `Привіт, ${this.state.name}`;
        else
            return `Пока, ${this.state.name}`;
    }

    render() {
        return (
            <div>
                {this.Change()}
            </div>
        )
    }
}

export default App5;