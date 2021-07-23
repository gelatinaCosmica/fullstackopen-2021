import React, { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = good * 1 + neutral * 0 + bad * -1;
  const positive = `${(good / total) * 100}%`;

  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <Statistic name="good" value={good} />
            <Statistic name="neutral" value={neutral} />
            <Statistic name="bad" value={bad} />
            <Statistic name="all" value={total} />
            <Statistic name="average" value={average} />
            <Statistic name="positive" value={positive} />
          </tbody>
        </table>
      </div>
    );
  }

  return <p>No feedback given</p>;
};

const Statistic = ({ name, value }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ handleClick, name }) => (
  <button onClick={handleClick}>{name}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} name="good" />
      <Button handleClick={handleNeutral} name="neutral" />
      <Button handleClick={handleBad} name="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
