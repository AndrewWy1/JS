import { Component } from "react";

class App6 extends Component {
	constructor() {
		super();
		this.state = { value: '' };
	}
	input(event) {
		const str = event.target.value.toUpperCase()
		this.setState({ value: str });
	}

	render() {
		return <div>
			<p>text: {this.state.value}</p>
			<input value={this.state.value} onChange={this.input.bind(this)} />
		</div>;
	}
}
export default App6;
