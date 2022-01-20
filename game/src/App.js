import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(1);

  const changeClicker = () => {
    setCounter(counter + counter2);
  };
  const [buildings, setBuildings] = useState(0);
  const [buy, setBuy] = useState(0);

  if (counter % 5 === 0 && counter !== 0) {
    setBuildings(buildings + 1);
    changeClicker();
  }
  if (buildings % 5 === 0 && buildings !== 0) {
    setBuy(buy + 1);
    setBuildings(buildings + 1);
  }
  const doubleClicker = () => {
    setCounter2(counter2 * 2);
  };
  return (
    <div className="App">
      <h1>The Building Game !!</h1>
      <br></br>
      <button className="mainButton" onClick={changeClicker}>
        Build !
      </button>
      <br></br>
      <h4>Floors Built!: {counter} </h4>
      <h4>Building so far!:{buildings} </h4>
      {counter >= 20 * counter2 ? (
        <button className="buyButton" onClick={doubleClicker}>
          Double the floors
        </button>
      ) : (
        ""
      )}
      <h4>cities built!: {buy}</h4>
    </div>
  );
}

export default App;
