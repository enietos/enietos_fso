const App = () => {
  const course = 'Half Stack app dev'
  const part1 = 'Fundamentals of React'
  const exercices1 = '10'
  const part2 = 'Using props to pass data'
  const exercices2 = 7
  const part3 = 'State of a component'
  const exercices3 = 14
  const total = exercices1 + exercices2 + exercices3

  return (
    <div>
      <Header title={course} />
      <Content part1={part1}
      exercices1={exercices1}
      part2={part2}
      part3={part3}
      exercices2={exercices2}
      exercices3={exercices3} />
      <Total total = {total} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part = {props.part1} exercise = {props.exercices1}/>
      <Part part = {props.part2} exercise = {props.exercices2}/>
      <Part part = {props.part3} exercise = {props.exercices3}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.total}</p>
    </div>
  )
}

export default App
