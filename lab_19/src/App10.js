import { Component } from "react";

class App10 extends Component {
    constructor() {
        super();
        this.state = {
            value1: null,
            value2: null,
            result: null,
        };
    }
    inputSubmit(event) {
        this.setState({ result: Number.parseInt(this.state.value1) + Number.parseInt(this.state.value2) });
        event.preventDefault();
    }
    inputChange1(event) {
        this.setState({ value1: event.target.value });
    }
    inputChange2(event) {
        this.setState({ value2: event.target.value });
    }

    render() {
        return <div>
            <p>Num: {this.state.result}</p>
            <form onSubmit={this.inputSubmit.bind(this)}>
                <input value={this.state.value1} onChange={this.inputChange1.bind(this)} />
                <input value={this.state.value2} onChange={this.inputChange2.bind(this)} />
                <input type="submit" />
            </form>
        </div>;
    }
}
export default App10;
