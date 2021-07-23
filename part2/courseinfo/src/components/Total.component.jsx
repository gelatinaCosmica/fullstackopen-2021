const Total = ({ parts }) => {

  const total =
    parts.reduce((total, part) =>
      total + part.exercises, 0
    )
  return <div ><strong>Total exercises: {total}</strong></div>
}

export default Total;