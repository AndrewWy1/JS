import React, { Component } from "react";

class App9 extends Component {
    render() {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const list = arr.map((value, key) => {
            return (<li key={key}>{value}</li>)
        });

        return (
            <div>
                <ul>
                    {list}
                </ul>
                <br/>
                <br/>
            </div>
        );
    }
}

export default App9;