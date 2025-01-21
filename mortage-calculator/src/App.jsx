import React from 'react'
import "./App.css"
import Calculator from './Calculator'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [principle, setprinciple] = useState(0)
  const [interest, setinterest] = useState(0)
  const [years, setyears] = useState(0)
  const [result, setresult] = useState(0)

  const handleChange = (e) => {
    const value = parseInt(e.target.value)
    if (e.target.id === "principle") {
      setprinciple(value)
    } else if (e.target.id === "interest") {
      setinterest(value)
    } else {
      setyears(value)
    }
  }
  //P(r(1+r)^n/((1+r)^n)-1))
  const CalculateMortage = () => {
    let rateOfInterest = interest
    if (rateOfInterest && principle && years) {
      rateOfInterest = rateOfInterest / 12 / 100;
      //console.log(rateOfInterest)
      const CalcPower = Math.pow(1 + rateOfInterest, years * 12)
      //console.log(CalcPower)
      const mainAnswer = principle * ((rateOfInterest * CalcPower) / (CalcPower - 1))
      setresult(Math.round(mainAnswer))
    }
  }

  useEffect(() => {
    CalculateMortage()
  }, [principle, interest, years])

  return (
    <div className="main">
      <Calculator handleChange={handleChange} result={result} />
    </div>
  )
}

export default App