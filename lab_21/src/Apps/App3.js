import React, { useState } from 'react';

function App3() {
    const [checkboxes, setCheckboxes] = useState(Array(10).fill(true));
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleCheckboxChange = (index) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index] = !newCheckboxes[index];
        setCheckboxes(newCheckboxes);
    };

    return (
        <div>
            {arr.map((item, index) => (
                <p key={index}>
                    <input type="checkbox" checked={checkboxes[index]} onChange={() => handleCheckboxChange(index)} />
                    {checkboxes[index] && <spam>{item}</spam>}
                </p>
            ))}
        </div>
    );
}

export default App3;

