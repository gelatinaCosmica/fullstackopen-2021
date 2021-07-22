import React, { useState } from "react";

const Anecdote = ({ anecdote, votesAmt, title }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>{anecdote}</div>
      <div>has {votesAmt} votes</div>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const totalAnecdotes = anecdotes.length;
  const getRandomIndex = () => Math.floor(Math.random() * totalAnecdotes);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Array.apply(null, new Array(totalAnecdotes)).map(
      Number.prototype.valueOf,
      0
    )
  );

  const mostVoted = Object.keys(votes).sort((a, b) => votes[b] - votes[a])[0];

  const handleNextAnecdote = () => {
    let index = getRandomIndex();
    setSelected(index);
  };

  const addVote = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1,
    });
  };

  return (
    <>
      <Anecdote
        title={"Anecdote of the day"}
        anecdote={anecdotes[selected]}
        votesAmt={votes[selected]}
      />
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <button onClick={addVote}>vote</button>
      <Anecdote
        title={"Most voted Anecdote"}
        anecdote={anecdotes[mostVoted]}
        votesAmt={votes[mostVoted]}
      />
    </>
  );
};

export default App;
