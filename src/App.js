import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [birthDate, setBirthDate] = useState([]);
  const [numerology, setNumerology] = useState(null);

  function handleOnChangeInput(e) {
    const birthItemDate = [];
    const splitBirthFirstTime = e.target.value.split("-");
    splitBirthFirstTime.forEach((item) => {
      item = item.split("");
      item.forEach((item) => {
        birthItemDate.push(parseInt(item));
      });
    });
    setBirthDate(birthItemDate);
  }

  function findNumberology(argument) {
    if (argument === 22) {
      setNumerology("22/4");
    } else {
      while (argument < 2 || argument > 11) {
        let stringArgument = argument.toString().split("");
        let numerologyOfBirth = 0;
        stringArgument.forEach((item) => {
          numerologyOfBirth += parseInt(item);
        });
        argument = numerologyOfBirth;
      }
      setNumerology(argument);
    }
  }

  function handleCreateDataForChart() {
    if (birthDate) {
      let sumMainNumberOfBirth = 0;
      birthDate.forEach((item) => {
        sumMainNumberOfBirth += item;
      });
      findNumberology(sumMainNumberOfBirth);
    }
  }

  function renderBirthChart(number) {
    if (birthDate.includes(number)) {
      return (
        <React.Fragment>
          {birthDate.map((item) => (
            <React.Fragment key={item}>
              {item === number && <p style={{ color: "black" }}>{number}</p>}
            </React.Fragment>
          ))}
        </React.Fragment>
      );
    }
    return <p style={{ color: "red" }}>{number}</p>;
  }

  return (
    <div className="App">
      <h1>Hello Numberology</h1>
      <h2>Input your date of birth and know your numerology</h2>
      <div id="birth-form-wrapper">
        <input type="date" onChange={(e) => handleOnChangeInput(e)} />
        <button onClick={() => handleCreateDataForChart()}>Submit</button>
      </div>
      <div>
        <p>Your numerology is: {numerology}</p>
      </div>
      <div id="birth-chart-wrapper">
        <div className="row">
          <div className="col">{renderBirthChart(3)}</div>
          <div className="col">{renderBirthChart(6)}</div>
          <div className="col">{renderBirthChart(9)}</div>
        </div>
        <div className="row">
          <div className="col">{renderBirthChart(2)}</div>
          <div className="col">{renderBirthChart(5)}</div>
          <div className="col">{renderBirthChart(8)}</div>
        </div>
        <div className="row">
          <div className="col">{renderBirthChart(1)}</div>
          <div className="col">{renderBirthChart(4)}</div>
          <div className="col">{renderBirthChart(7)}</div>
        </div>
      </div>
    </div>
  );
}
