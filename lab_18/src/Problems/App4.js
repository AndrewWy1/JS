import React, { Component } from "react";

class App4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Іван",
            age: 25
        }

        this.updateInfo = this.updateInfo.bind(this);
    }

    updateInfo() {
        this.setState(
            {
                name: "Коля",
                age: 30
            }
        )
    }

    render() {
        return (
            <div>
                Ім'я:{this.state.name}, вік:{this.state.age}
                <br />
                <button onClick={this.updateInfo}>
                    Press to update
                </button>
            </div>
        )
    }
}
export default App4;