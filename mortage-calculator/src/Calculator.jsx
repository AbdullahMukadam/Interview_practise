import React from 'react'
import "./App.css"

function Calculator({ handleChange, result }) {
    return (
        <div className="container">
            <h1>Mortage Calculator</h1>
            <div className="input-container">
                <label for="priciple">Principle</label>
                <input placeholder="Enter Principle" id="principle" onChange={handleChange} />
                <label for="interest">Interest</label>
                <input placeholder="Enter Interest" id="interest" onChange={handleChange} />
                <label for="years">Years</label>
                <input placeholder="Enter Years" id="years" onChange={handleChange} />
            </div>
            <p>{`Your Emi is ${result}`}</p>
        </div>
    )
}

export default Calculator