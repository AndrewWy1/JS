import React, { Component } from "react";

class App8 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Іван",
            age: 25,
            show: false,
            buttonText: "Показати"
        }

        this.HideElement = this.HideElement.bind(this);
    }

    HideElement() {
        if (!this.state.show)
            this.setState({ buttonText: "Сховати" })

        else
            this.setState({ buttonText: "Показати" })

        this.setState({
            show: !this.state.show
        })
    }

    render() {
        if (this.state.show)
            var element = <p>Ім'я:{this.state.name}, вік:{this.state.age}</p>;

        return (
            <div>
                {element}
                <button onClick={this.HideElement}>
                    {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default App8;