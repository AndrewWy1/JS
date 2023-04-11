import React, { useState } from "react";

function App4() {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [newCity, setNewCity] = useState("");

    const handleAddCity = () => {
        if (newCity.trim() !== "") {
            setCities([...cities, newCity]);
            setNewCity("");
        }
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    return (
        <div>
            <div>
                <p>Add a city:</p>
                <input type="text" value={newCity} onChange={(e) => setNewCity(e.target.value)} placeholder="Enter a city name" />
                <button onClick={handleAddCity}>Add City</button>
            </div>
            <div>
                <p>Select a city:</p>
                <select value={selectedCity} onChange={handleCityChange}>
                    <option value="">--Select a city--</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <p>Selected city:</p>
                {selectedCity ? (
                    <p>{`You selected: ${selectedCity}`}</p>
                ) : (
                    <p>Please select a city.</p>
                )}
            </div>
        </div>
    );
}

export default App4;
