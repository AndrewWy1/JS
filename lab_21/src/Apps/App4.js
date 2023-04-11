import React, { Component } from 'react';

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: 'Микола', surname: 'Шевченко', age: 30, visible: true },
        { name: 'Василь', surname: 'Чумак', age: 40, visible: true },
        { name: 'Петро', surname: 'Стеценко', age: 50, visible: true },
      ]
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(index) {
    this.setState(prevState => {
      const users = [...prevState.users];
      users[index].visible = !users[index].visible;
      return { users };
    });
  }

  render() {
    const usersList = this.state.users.map((user, index) => (
      <li key={index}>
        <input type="checkbox" checked={user.visible} onChange={() => this.handleCheckboxChange(index)} />
        {user.visible ? `${user.name} ${user.surname} ${user.age}` : user.name}
      </li>
    ));

    return (
      <div>
        <ul>
          {usersList}
        </ul>
      </div>
    );
  }
}
export default App4;
