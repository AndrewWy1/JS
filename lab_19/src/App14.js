import { Component } from "react";


class App14 extends Component {
    constructor() {
        super();
        this.state = {
            hrefs: [
                { href: '1.html', text: 'посилання 1' },
                { href: '2.html', text: 'посилання 2' },
                { href: '3.html', text: 'посилання 3' },
            ],
            href: null,
            text: null,
        };
    }

    addElement(event) {
        const element = { href: this.state.href, text: this.state.text };
        this.state.hrefs.push(element);
        this.setState({ hrefs: this.state.hrefs });

        event.preventDefault();
    }
    handleChangeHref(event) {
        this.setState({ href: event.target.value });
    }
    handleChangeText(event) {
        this.setState({ text: event.target.value });
    }

    render() {
        const list = this.state.hrefs.map((item, index) => {
            return <li key={index}><a href={item.href}>{item.text}</a></li>;
        });

        return (
            <div>
                <ul>
                    {list}
                </ul>

                <form onSubmit={this.addElement.bind(this)}>
                    <input value={this.state.href} onChange={this.handleChangeHref.bind(this)} />
                    <input value={this.state.text} onChange={this.handleChangeText.bind(this)} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
export default App14;