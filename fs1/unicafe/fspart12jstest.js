const x = 1
let y = 10
const t = [1,2,3]
t.push(10)
const t2 = t.concat(12)
console.log(t2.length)
t.forEach(value => {
    console.log(value)
})
const mapping = t.map(value => 'My name is ' + value*value)
const [first, second, ... rest] = mapping
console.log(rest)

const App = () => {
    const name = 'Peter'
    const age = 10
  
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name={name} age={age} />
      </div>
    )
  }

const Hello = (props) => {
    const bornYear = () => {    
        const yearNow = new Date().getFullYear()    
        return yearNow - props.age  }
    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>    </div>
    )
  }

console.log(App)