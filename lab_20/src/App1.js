import React, { Component } from "react";

class App1 extends Component{
    constructor(props){
        super(props);

        this.state =  {
            value: null,
        }

        this.handelInput = this.handelInput.bind(this)
    }

    handelInput(event){
        this.setState({value: event.target.value});
    }

    render(){
        return(
            <div>
                <textarea rows='5' cols='20' onChange={this.handelInput}></textarea>
                <p>Text: {this.state.value}</p>
            </div>
        )
    }
}

export default App1;
