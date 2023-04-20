import { useState } from 'react';

function App6() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const deleteTodo = (index) => {
        setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
    };

    const toggleTodo = (index) => {
        setTodos([
            ...todos.slice(0, index),
            { ...todos[index], completed: !todos[index].completed },
            ...todos.slice(index + 1),
        ]);
    };

    const updateTodo = (index, newText) => {
        setTodos([
            ...todos.slice(0, index),
            { ...todos[index], text: newText },
            ...todos.slice(index + 1),
        ]);
    };

    return (
        <div>
            <h1>TODO List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(index)}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                        <button onClick={() => updateTodo(index, prompt('New Text'))}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App6;