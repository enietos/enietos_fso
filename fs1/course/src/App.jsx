const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const all_parts = course.parts
  console.log(all_parts, "App parts")

  return (
    <div>
      <Header name = {course.name} />
      <Content parts = {all_parts}/>
      <Total parts = {all_parts} />
    </div>  
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}


const Content = (props) => {
  console.log(props, "Content props")
  const printer = props.parts.map((value,index) => 
    <div key={index}>
      <Part name = {value.name} exercises = {value.exercises}></Part>
    </div>
  )

  return (
    <div>
      {printer}
    </div>
  )
}

const Part = (props) => {
  console.log(props, "Part props")
  return (
      <p>{props.name} {props.exercises}</p>
  )
}

const Total = (props) => {
  console.log(props)
  const total = props.parts.reduce((sum,part) => sum + part.exercises,0)
  return (
    <div>
      <p>{total}</p>
    </div>
  )
}

export default App
