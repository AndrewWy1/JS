import { Component } from "react";

class App9 extends Component {
	constructor() {
		super();
		this.state = { value: null };
	}
	inputSubmit(event) {
		this.setState({ value1: this.state.value});
        event.preventDefault();
	}
    inputChange(event){
        this.setState({value: event.target.value});
    }

	render() {
		return <div>
			<p>Text: {this.state.value1}</p>
            <form onSubmit={this.inputSubmit.bind(this)}>
			<input value={this.state.value} onChange={this.inputChange.bind(this)} />
                <input type="submit"/>
            </form>
		</div>;
	}
}
export default App9;
