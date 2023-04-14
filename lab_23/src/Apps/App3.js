import React, { Component, useState } from 'react';

function User(props) {
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.age}</td>
            <td>
            <a href="#" onClick={() => props.handleShowMessage(props.firstName)}>Show message</a>
            </td>
        </tr>
    );
}

class App3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                { firstName: 'John', lastName: 'Doe', age: 32 },
                { firstName: 'Jane', lastName: 'Doe', age: 28 },
                { firstName: 'Bob', lastName: 'Smith', age: 45 }
            ],
        }

        this.ShowMessage = this.showMessage.bind(this);
    }

    showMessage(name) {
        alert(name);
    }

    render() {
        const list = this.state.users.map(user => (
            <User
                firstName={user.firstName}
                lastName={user.lastName}
                age={user.age}
                handleShowMessage={this.showMessage}
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

export default App3;
