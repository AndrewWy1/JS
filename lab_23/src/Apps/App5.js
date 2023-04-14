import React, { Component, useState } from 'react';

function User(props) {
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.age}</td>
            <td>
                <a href="#" onClick={() => props.handleDeleteUser(props.index)}>Delete user</a>
            </td>
        </tr>
    );
}

class App5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { firstName: 'John', lastName: 'Doe', age: 32 },
                { firstName: 'Jane', lastName: 'Doe', age: 28 },
                { firstName: 'Bob', lastName: 'Smith', age: 45 }
            ],
        }

        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(index) {
        const users = [...this.state.users];
        users.splice(index, 1);
        this.setState({ users: users });
    }

    render() {
        const list = this.state.users.map((user, index) => (
            <User
                firstName={user.firstName}
                lastName={user.lastName}
                age={user.age}
                index={index}
                handleDeleteUser={this.deleteUser}
            />
        ))

        return (
            <div>
                <table border={1} color={"black"} >
                    {list}
                </table>
            </div>
        );
    }
}

export default App5;