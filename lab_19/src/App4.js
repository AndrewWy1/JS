import React, { Component } from "react";

class App4 extends Component {
    constructor(props) {
        super(props);
        this.state = { name: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'] };
    }

    addElement() {
        this.state.name.push("пункт");
        this.setState({ name: this.state.name });
    }

    deleteElement() {
        this.setState({ name: this.state.name.slice(0, -1) });
    }

    deleteElementByIndex(index) {
        this.setState({ name: this.state.name.filter((item, i) => i !== index) });
    }

    render() {
        const list = this.state.name.map((item, index) => {
            return <li key={index}>
                {item}
                <button onClick={this.deleteElementByIndex.bind(this, index)}>
                    delete
                </button>
            </li>;
        });

        return (
            <div>
                <ul>
                    {list}
                </ul>
                <button onClick={this.addElement.bind(this)}>Press to add element</button>
                <button onClick={this.deleteElement.bind(this)}>Press to delete element</button>
            </div>
        )
    }
}
export default App4;