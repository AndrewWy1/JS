import React, { Component } from "react";

class App7 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Іван",
            age: 25,
            show: false
        }

        this.HideElement = this.HideElement.bind(this);
    }

    HideElement() {
        this.setState({ show: !this.state.show })
    }

    render() {
        if (this.state.show)
            var element = <p>Ім'я:{this.state.name}, вік:{this.state.age}</p>;

        return (
            <div>
                {element}
                <button onClick={this.HideElement}>
                    Press on me
                </button>
            </div>
        )
    }
}

export default App7;