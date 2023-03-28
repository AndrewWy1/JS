import { Component } from "react";

class App7 extends Component {
	constructor() {
		super();
		this.state = { value: null };
	}
	inputSubmit(event) {
		this.setState({ value: (2023 - Number.parseInt(this.state.value))});
        event.preventDefault();
	}
    inputChange(event){
        this.setState({value: event.target.value});
    }

	render() {
		return <div>
			<p>Age: {this.state.value}</p>
            <form onSubmit={this.inputSubmit.bind(this)}>
			<input value={this.state.value} onChange={this.inputChange.bind(this)} />
                <input type="submit"/>
            </form>
		</div>;
	}
}
export default App7;
