import Part from "./Part.component";


const Content = ({ parts }) => {
  return (
    <div>
      <ul>
        {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
      </ul>
    </div>
  )
}

export default Content;