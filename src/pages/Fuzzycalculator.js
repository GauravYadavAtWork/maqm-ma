import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const FuzzyCalculator = () => {
  const [developerView, setDeveloperView] = useState([0, 0, 0]);
  const [testerView, setTesterView] = useState([0, 0, 0]);
  const [endUserView, setEndUserView] = useState([0, 0, 0]);
  const [developerWeight, setDeveloperWeight] = useState([0, 0, 0]);
  const [testerWeight, setTesterWeight] = useState([0, 0, 0]);
  const [endUserWeight, setEndUserWeight] = useState([0, 0, 0]);
  const [result, setResult] = useState([0, 0, 0]);

  const handleInputChange = (setter, index, value) => {
    const newValues = [...setter];
    newValues[index] = parseFloat(value);
    return newValues;
  };

  const calculateFuzzyQualityRating = () => {

    const calculate = (rate, weight) => {
      return rate.map((r, i) => r * weight[i]);
    };

    const developerResult = calculate(developerView, developerWeight);
    const testerResult = calculate(testerView, testerWeight);
    const endUserResult = calculate(endUserView, endUserWeight);

    const maxResult = [
      Math.max(developerResult[0], testerResult[0], endUserResult[0]),
      Math.max(developerResult[1], testerResult[1], endUserResult[1]),
      Math.max(developerResult[2], testerResult[2], endUserResult[2])
    ];

    console.log(developerResult);
    console.log(testerResult);
    console.log(endUserResult);
    console.log(maxResult);

    setResult([
      maxResult[0],
      maxResult[1],
      maxResult[2]
    ]);
  };

  return (
    <>
      <div className="containerhehe">
    <h1>Fuzzy Quality Calculator</h1>
    <div className="input-section">
      <h2>Developer's View</h2>
      <input type="number" step="0.01" value={developerView[0]} onChange={(e) => setDeveloperView(handleInputChange(developerView, 0, e.target.value))} />
      <input type="number" step="0.01" value={developerView[1]} onChange={(e) => setDeveloperView(handleInputChange(developerView, 1, e.target.value))} />
      <input type="number" step="0.01" value={developerView[2]} onChange={(e) => setDeveloperView(handleInputChange(developerView, 2, e.target.value))} />
    </div>
    <div className="input-section">
      <h2>Tester's View</h2>
      <input type="number" step="0.01" value={testerView[0]} onChange={(e) => setTesterView(handleInputChange(testerView, 0, e.target.value))} />
      <input type="number" step="0.01" value={testerView[1]} onChange={(e) => setTesterView(handleInputChange(testerView, 1, e.target.value))} />
      <input type="number" step="0.01" value={testerView[2]} onChange={(e) => setTesterView(handleInputChange(testerView, 2, e.target.value))} />
    </div>
    <div className="input-section">
      <h2>End-User's View</h2>
      <input type="number" step="0.01" value={endUserView[0]} onChange={(e) => setEndUserView(handleInputChange(endUserView, 0, e.target.value))} />
      <input type="number" step="0.01" value={endUserView[1]} onChange={(e) => setEndUserView(handleInputChange(endUserView, 1, e.target.value))} />
      <input type="number" step="0.01" value={endUserView[2]} onChange={(e) => setEndUserView(handleInputChange(endUserView, 2, e.target.value))} />
    </div>
    <div className="input-section">
      <h2>Developer's Weight</h2>
      <input type="number" step="0.01" value={developerWeight[0]} onChange={(e) => setDeveloperWeight(handleInputChange(developerWeight, 0, e.target.value))} />
      <input type="number" step="0.01" value={developerWeight[1]} onChange={(e) => setDeveloperWeight(handleInputChange(developerWeight, 1, e.target.value))} />
      <input type="number" step="0.01" value={developerWeight[2]} onChange={(e) => setDeveloperWeight(handleInputChange(developerWeight, 2, e.target.value))} />
    </div>
    <div className="input-section">
      <h2>Tester's Weight</h2>
      <input type="number" step="0.01" value={testerWeight[0]} onChange={(e) => setTesterWeight(handleInputChange(testerWeight, 0, e.target.value))} />
      <input type="number" step="0.01" value={testerWeight[1]} onChange={(e) => setTesterWeight(handleInputChange(testerWeight, 1, e.target.value))} />
      <input type="number" step="0.01" value={testerWeight[2]} onChange={(e) => setTesterWeight(handleInputChange(testerWeight, 2, e.target.value))} />
    </div>
    <div className="input-section">
      <h2>End-User's Weight</h2>
      <input type="number" step="0.01" value={endUserWeight[0]} onChange={(e) => setEndUserWeight(handleInputChange(endUserWeight, 0, e.target.value))} />
      <input type="number" step="0.01" value={endUserWeight[1]} onChange={(e) => setEndUserWeight(handleInputChange(endUserWeight, 1, e.target.value))} />
      <input type="number" step="0.01" value={endUserWeight[2]} onChange={(e) => setEndUserWeight(handleInputChange(endUserWeight, 2, e.target.value))} />
    </div>
    <button className="calculate-button" onClick={calculateFuzzyQualityRating}>Calculate</button>
    <div className="result">
      <h2>Result</h2>
      <p>Developer: {result[0]}</p>
      <p>Tester: {result[1]}</p>
      <p>End-User: {result[2]}</p>
    </div>
  </div>

    <div className="navbar">
    <Link to={'/'} >Dev view</Link>
    <Link to={'/tester'} >Tester view</Link>
    <Link to={'/enduser'}>Enduser view</Link>
    <Link to={'/fuzzycalc'} className="active">Fuzzy Calc</Link>
    </div>

    </>
  );
};

export default FuzzyCalculator;
