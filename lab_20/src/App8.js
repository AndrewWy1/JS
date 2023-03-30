import React, { Component } from "react";

class App8 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
      selectValue: "Не позначено",
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleSelectChange(event) {
    this.setState({
      selectValue: event.target.value,
      isChecked: event.target.value === "Позначено" ? true : false,
    });
  }

  handleCheckboxChange(event) {
    const isChecked = event.target.checked;

    this.setState({
      isChecked,
      selectValue: isChecked ? "Позначено" : "Не позначено",
    });
  }

  render() {
    return (
      <div>
        <select value={this.state.selectValue} onChange={this.handleSelectChange}>
          <option value="Позначено">Позначено</option>
          <option value="Не позначено">Не позначено</option>
        </select>

        <p>
            <input type="checkbox" checked={this.state.isChecked} onChange={this.handleCheckboxChange}/>
            {this.state.isChecked ? "Позначено" : "Не позначено"}
        </p>
      </div>
    );
  }
}

export default App8;
