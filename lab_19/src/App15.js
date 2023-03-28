import { Component } from "react";


class App15 extends Component {
    constructor() {
        super();
        this.state =
        {
            name: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'],
            number: null,
            element: null
        };
    }


    searchElement(event) {
        const element = this.state.name.filter((item, i) => i == this.state.number);

        this.setState({ element: element });

        event.preventDefault();
    }
    handleChange(event) {
        this.setState({ number: event.target.value });
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

                <form onSubmit={this.searchElement.bind(this)}>
                    <input value={this.state.number} onChange={this.handleChange.bind(this)} />
                    <input type="submit" />

                </form>
                <p>Element: {this.state.element}</p>
            </div>
        );
    }
}
export default App15;