import { Component } from "react";

class App5 extends Component {
    constructor() {
        super();
        this.state = { value: '' };
    }
    input(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return <div>
            <p>Text: {this.state.value}</p>
            <input value={this.state.value} onChange={this.input.bind(this)} />
        </div>;
    }
}
export default App5;
