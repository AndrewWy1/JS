import React, { Component } from "react";

class App2 extends Component{
    constructor(props){
        super(props);

        this.state =  {
            checkedValue: false,
        }

        this.handelCheckedValue = this.handelCheckedValue.bind(this);
    }

    handelCheckedValue(event){
        this.setState({checkedValue: event.target.checked});
    }   

    render(){
        return(
            <div>
                <input type="checkbox" checked={this.state.checkedValue} onChange={this.handelCheckedValue}></input>
                <p>Checkbox: {this.state.checkedValue ? "On" : "Off"}</p>
            </div>
        )
    }
}

export default App2;