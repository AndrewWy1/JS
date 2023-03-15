import React, { Component } from "react";

class App11 extends Component {
    render() {
        function GetNum1() {
            return 1;
        }
        function GetNum2() {
            return 2;
        }

        return (
            <div>
                {GetNum1() + GetNum2()}
            </div>
        );
    }
}
export default App11;