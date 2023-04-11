import React, { Component } from 'react';

class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isInputValid: true
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    const isValid = value.length >= 4 && value.length <= 9;
    this.setState({
      value,
      isInputValid: isValid
    });
  }

  render() {
    const { isInputValid } = this.state;
    const inputStyle = {
      border: `3px solid ${isInputValid ? 'green' : 'red'}`
    };

    return (
      <input type="text" value={this.state.value} onChange={this.handleChange} style={inputStyle}
      />
    );
  }
}

export default App1;
