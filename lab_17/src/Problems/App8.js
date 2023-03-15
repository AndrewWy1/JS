import React, { Component } from "react";

class App8 extends Component {
    render() {
        const show = true;

        if (show) {
            return (
                <div>
                    <br />
                    EighthText1
                    <br />
                    <br />
                </div>
            );
        }
        else {
            return (
                <div>
                    <br />
                    EighthText2
                    <br />
                    <br />
                </div>
            );
        }
    }
}
export default App8;