import React, { Component } from "react";

class App3 extends Component{
    constructor(props){
      super(props);
      this.state = {name: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']};
    }

    addElement(){
        this.state.name.push("пункт");
        this.setState({name: this.state.name});
    }

    deleteElement() {
        this.setState({ name: this.state.name.slice(0, -1) });
      }

    render(){
      const list = this.state.name.map((item, index) =>{
          return <li key={index}>{item}</li>;
      });

      return(
        <div>
          <ul>
            {list}
          </ul>
          <button onClick={this.addElement.bind(this)}>Press to add element</button>
          <button onClick={this.deleteElement.bind(this)}>Press to delete element</button>
        </div>
      )
    }
}
export default App3;