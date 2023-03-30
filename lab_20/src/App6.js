import React, { Component } from "react";

class App6 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            texts:[
                {text: ""},
            ],
            value: null,
        }

        this.handelValue = this.handelValue.bind(this);
    }

    handelValue(event) {
        this.setState({ value: event.target.value });
    }

    addElement(event) {
        const element = {text: this.state.value };
        this.state.texts.push(element);
        this.setState({ texts: this.state.texts });

        event.preventDefault();
    }

    render() {
        const list = this.state.texts.map((item, index) => {
            return <p key={index}> Text: {item.text}</p>
        });

        return (
            <div>
                <form onSubmit={this.addElement.bind(this)}>
                    <textarea rows="5" cols="20" onChange={this.handelValue}></textarea>
                    <input type="submit" />
                </form>

                <div>
                    {list}
                </div>
            </div>
        )
    }
}

export default App6;