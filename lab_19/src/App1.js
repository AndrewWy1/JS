import React, { Component } from "react";

class App1 extends Component{
    constructor(props){
      super(props);
      this.state = {name: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']};
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
        </div>
      )
    }
}

export default App1;