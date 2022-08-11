import React from "react";
import { useState, useEffect } from "react";
import "../styles/Search.css"

function Search() {

    const [input, setInput] = useState('')
    const [selection, setSelection] = useState('')

    useEffect(() => {
        if (!selection) return               /* Guardclass tegen lege input */

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${selection}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)

            .then(res => res.json())
            .then(data => console.log(data))
    }, [selection])

    return (
        <div className="inputfield">
            <input type="text" value={input} placeholder="Enter city name.." onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => setSelection(input)}>Search</button>
        </div>
    );
};

export default Search;