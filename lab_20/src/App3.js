import React, { Component } from "react";

class App3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedValue: false,
        }

        this.handelCheckedValue = this.handelCheckedValue.bind(this);
    }

    handelCheckedValue(event) {
        this.setState({ checkedValue: event.target.checked });
    }

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.state.checkedValue} onChange={this.handelCheckedValue}></input>
                <p>
                    {!this.state.checkedValue ? null : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis saepe dolorum amet aspernatur," +
                        "voluptatibus maiores architecto! Facere sunt amet velit dolorum minus, aspernatur repudiandae consequatur," +
                        "unde eos vel omnis? Illum!"}
                </p>
            </div>
        )
    }
}

export default App3;