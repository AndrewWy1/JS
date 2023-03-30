import React, { Component } from "react";

class App11 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        };

        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked(event) {
        this.setState({ checked: event.target.checked });
    }

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleChecked} />
                <input type="text" disabled={!this.state.checked} />
            </div>
        );
    }
}

export default App11;
