import { Component } from "react";


class App14 extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { name: 'Коля', age: 30 },
                { name: 'Василь', age: 40 },
                { name: 'Петро', age: 50 },
            ],

            name: null,
            age: null,
        };
    }

    addElement(event) {
        const element = { name: this.state.name, age: this.state.age };
        this.state.users.push(element);
        this.setState({ users: this.state.users });

        event.preventDefault();
    }
    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangeAge(event) {
        this.setState({ age: event.target.value });
    }

    render() {
        const list = this.state.users.map((item, index) => {
            return <tr key={index}>
                <td>
                    name: {item.name}, age: {item.age}
                </td>
            </tr>;
        });

        return (
            <div>
                <table border={1} color={"black"}>
                    {list}
                </table>

                <form onSubmit={this.addElement.bind(this)}>
                    <input value={this.state.name} onChange={this.handleChangeName.bind(this)} />
                    <input value={this.state.age} onChange={this.handleChangeAge.bind(this)} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
export default App14;