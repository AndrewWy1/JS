import React, { Component } from "react";

class App2 extends Component{
    constructor(props){
      super(props);
      this.state = {name: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']};
    }

    addElement(){
        this.state.name.push("пункт");
        this.setState({name: this.state.name});
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
        </div>
      )
    }
}

export default App2;