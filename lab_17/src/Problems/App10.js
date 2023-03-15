import React, { Component } from "react";

class App10 extends Component {
    render() {
        function GetText() {
            return <p>TenthText</p>
        }

        return (
            <div>
                {GetText()}
            </div>
        );
    }
}
export default App10;