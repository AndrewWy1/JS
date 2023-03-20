import React, { Component } from "react";

class App11 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hrefs: [
                { href: '1.html', text: 'посилання 1' },
                { href: '2.html', text: 'посилання 2' },
                { href: '3.html', text: 'посилання 3' },
            ]
        };

    }

    render() {
        return (
            <ul>
                {this.state.hrefs.map((item, key) =>
                    <li key={key}>
                        <a href={item.href}>
                            {item.text}
                        </a>
                    </li>
                )}
            </ul>
        )
    }
}

export default App11;