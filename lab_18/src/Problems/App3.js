import React, { Component } from "react";

class App3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Іван",
            age: 25
        }

        this.showMessage = this.showMessage.bind(this);
    }

    showMessage() {
        alert(`Ім'я: ${this.state.name}`)
    }

    render() {
        return (
            <div>
                <button onClick={this.showMessage}>
                    Press on button
                </button>
            </div>
        )
    }
}

export default App3;