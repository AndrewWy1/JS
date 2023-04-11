import React, { Component } from "react";

class App1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ]
        };

        this.crossing = this.crossing.bind(this);
    }

    crossing(event) {
        if(event.currentTarget.style.textDecoration !== 'line-through')
            event.currentTarget.style.textDecoration = 'line-through';

        else 
            event.currentTarget.style.textDecoration = '';
    }

    render() {
        const list = this.state.items.map(item =>
            <li key={ Math.random() }>
                <label onClick={ this.crossing }>
                    <input type="checkbox"/>
                    { item }
                </label>
            </li>
        );

        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default App1;