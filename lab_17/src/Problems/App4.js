import React, { Component } from "react";

class App4 extends Component {
    render() {
        const text1 = <p>FourthText1</p>
        const text2 = <p>FourthText2</p>

        return (
            <div>
                {text1}
                <p>!!!</p>
                {text2}
                <br/>
                <br/>
            </div>
        );
    }
}
export default App4;