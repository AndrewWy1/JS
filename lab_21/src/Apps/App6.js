import React, { Component } from "react";


class App6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { name: 'Микола', age: 30 },
                { name: 'Василь', age: 40 },
                { name: 'Петро', age: 50 },
            ],
            editingIndex: -1,
            editingValue: '',
        };
    }

    handleEditClick = (index) => {
        this.setState({
            editingIndex: index,
            editingValue: this.state.users[index].name,
        });
    };

    handleInputChange = (event) => {
        this.setState({ editingValue: event.target.value });
    };

    handleInputBlur = () => {
        const { editingIndex, editingValue } = this.state;
        if (editingIndex >= 0) {
            const newUsers = [...this.state.users];
            newUsers[editingIndex].name = editingValue;
            this.setState({ users: newUsers, editingIndex: -1, editingValue: '' });
        }
    };

    render() {
        const { users, editingIndex, editingValue } = this.state;

        return (
            <table>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editingValue}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleInputBlur}
                                        autoFocus
                                    />
                                ) : (
                                    user.name
                                )}
                            </td>
                            <td>{user.age}</td>
                            <td>
                                <button onClick={() => this.handleEditClick(index)}>
                                    Редагувати
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
export default App6  