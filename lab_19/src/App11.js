import { Component } from "react";

class App10 extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            lastName: null,
            frathersName: null,
            fullName: null,
        };
    }
    inputSubmit(event) {
        this.setState({ fullName: this.state.name + " " + this.state.lastName + " " + this.state.frathersName });
        event.preventDefault();
    }
    inputChangeName(event) {
        this.setState({ name: event.target.value });
    }
    inputChangeLastName(event) {
        this.setState({ lastName: event.target.value });
    }
    inputChangeFathersName(event) {
        this.setState({ frathersName: event.target.value });
    }

    render() {
        return <div>
            <p>FullName: {this.state.fullName}</p>
            <form onSubmit={this.inputSubmit.bind(this)}>
                <input value={this.state.name} onChange={this.inputChangeName.bind(this)} />
                <input value={this.state.lastName} onChange={this.inputChangeLastName.bind(this)} />
                <input value={this.state.frathersName} onChange={this.inputChangeFathersName.bind(this)} />
                <input type="submit" />
            </form>
        </div>;
    }
}
export default App10;
