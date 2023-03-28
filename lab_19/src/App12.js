import { Component } from "react";


class App12 extends Component {
    constructor() {
        super();
        this.state =
        {
            name: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'],
            text: null,
        };
    }

    addElement(event) {
        this.state.name.push(this.state.text);
        this.setState({ name: this.state.name });

        event.preventDefault();
    }
    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    render() {
        const list = this.state.name.map((item, index) => {
            return <li key={index}>{item}</li>;
        });

        return (
            <div>
                <ul>
                    {list}
                </ul>

                <form onSubmit={this.addElement.bind(this)}>
                    <input value={this.state.text} onChange={this.handleChange.bind(this)} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
export default App12;