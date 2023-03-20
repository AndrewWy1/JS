import React, { Component } from "react";

class App3 extends Component {
    render() {
        const text = <p>ThirdText</p>

        return (
            <div>
                {text}
                <br/>
                <br/>
            </div>
        );
    }
}

export default App3;

db,users.insertMany([
    {name: "Vasya", age: 28},
    {name: "Nasta", age: 29},
    {name: "Asya", age: 27},
    {name: "Lasya", age: 22},
    {name: "Masya", age: 25},
    {name: "Dasya", age: 27},
])