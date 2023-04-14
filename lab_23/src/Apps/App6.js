import React, { useState } from 'react';

function ListItem(props) {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(props.text);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleInputBlur = () => {
        setEditing(false);
        props.onTextChange(props.index, text);
    };

    return (
        <li>
            {editing ? (
                <input type="text" value={text} onChange={handleInputChange} onBlur={handleInputBlur} />
            ) : (
                <>
                    <span>{props.text}</span>
                    <a href="#" onClick={handleEditClick}>
                        редагувати
                    </a>
                </>
            )}
        </li>
    );
}

function List(props) {
    const handleTextChange = (index, text) => {
        const newList = [...props.items];
        newList[index] = text;
        props.onListChange(newList);
    };

    const listItems = props.items.map((item, index) => (
        <ListItem key={index} index={index} text={item} onTextChange={handleTextChange} />
    ));

    return <ul>{listItems}</ul>;
}

function App6() {
    const [list, setList] = useState(['item 1', 'item 2', 'item 3']);

    const handleListChange = (newList) => {
        setList(newList);
    };

    return (
        <div>
            <List items={list} onListChange={handleListChange} />
        </div>
    );
}

export default App6;
