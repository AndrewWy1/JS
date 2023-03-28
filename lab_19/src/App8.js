import { Component } from "react";

class App8 extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            Name: '',
            LastName: '',
            FathersName: '',
         };
    }
    inputSubmit(event) {
        // Розбиття fullName на Name, LastName та FathersName
        const fullNameArray = this.state.fullName.split(" ");
        this.setState({
            Name: fullNameArray[0] || '',
            LastName: fullNameArray[1] || '',
            FathersName: fullNameArray[2] || '',
        });

        event.preventDefault();
    }
    inputChange(event){
        this.setState({fullName: event.target.value});
    }

    render() {
        return <div>
            <p>Name: {this.state.Name}</p>
            <p>LastName: {this.state.LastName}</p>
            <p>FathersName: {this.state.FathersName}</p>
            
            <form onSubmit={this.inputSubmit.bind(this)}>
                <input value={this.state.fullName} onChange={this.inputChange.bind(this)} />
                <button type="submit">Submit</button>
            </form>
        </div>;
    }
}
export default App8;
