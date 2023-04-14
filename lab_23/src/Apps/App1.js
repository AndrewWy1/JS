import React, { useState } from 'react';

function User(props) {
    return (
        <tr border={1} color={"black"}>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.age}</td>
        </tr>
    );
}

function App1() {
    const [users, setUsers] = useState([
        { firstName: 'John', lastName: 'Doe', age: 32 },
        { firstName: 'Jane', lastName: 'Doe', age: 28 },
        { firstName: 'Bob', lastName: 'Smith', age: 45 }
    ]);

    const list = users.map(user => (
        <User
            firstName={user.firstName}
            lastName={user.lastName}
            age={user.age}
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

export default App1;
