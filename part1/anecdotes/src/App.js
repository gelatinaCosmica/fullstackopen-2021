import React, { useState } from "react";

const Anecdote = ({ anecdote, votesAmt }) => {
  return (
    <>
      <div>{anecdote}</div>
      <div>has {votesAmt} votes</div>
    </>
  );
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const handleNextAnecdote = () => {
    let index = getRandomIndex();
    setSelected(index);
  };
  console.log(anecdotes[selected]);

  const addVote = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1,
    });
  };

  const totalAnecdotes = anecdotes.length;
  const getRandomIndex = () => Math.floor(Math.random() * totalAnecdotes);

  console.log(votes);

  return (
    <>
      <Anecdote
        anecdote={anecdotes[selected]}
        selected={selected}
        votesAmt={votes[selected]}
      />
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <button onClick={addVote}>vote</button>
    </>
  );
};

export default App;
