const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0);

  return <div>Total exercises: {total}</div>
}

export default Total;