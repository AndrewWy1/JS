import React, { Component } from 'react';

class App5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['1', '2', '3', '4']
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(event, index) {
        const { items } = this.state;
        items[index] = event.target.value;
        this.setState({ items });
    }

    render() {
        const { items } = this.state;
        return (
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => this.setState({ editingIndex: index })}>
                        {this.state.editingIndex === index ? (
                            <input type="text" defaultValue={item} onBlur={() => this.setState({ editingIndex: null })} onChange={(event) => this.handleEdit(event, index)} />
                        ) : (
                            item
                        )}
                    </li>
                ))}
            </ul>
        );
    }
}

export default App5;
