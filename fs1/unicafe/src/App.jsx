import { useState } from 'react'
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodClick = () => {setGood(good + 1)
    console.log("Good click")
  }
  const handleNeutralClick = () => {setNeutral(neutral + 1)}
  const handleBadClick = () => {setBad(bad + 1)}
  const Ratings = [good,neutral,bad]

  return (
    <div>
      
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral"/>
      <Button onClick={handleBadClick} text="Bad"/>
      <br></br>
      <StatisticLine text="Good" value ={good} />
      <StatisticLine text="Bad" value ={bad} />
      <StatisticLine text="Neutral" value ={neutral} />
      <Statistics Ratings = {Ratings}></Statistics>
    </div>
  )
}

const Statistics = ({ Ratings }) => {  
  console.log("Stats props", {Ratings})
  const sum = Ratings.reduce((a,b) => a+b,0)
  if (sum === 0) {    
    return (<div> This component will display statistics once there is data</div>)  
    }  
    return (<div> Mean: {(Ratings[0] - Ratings[2]) / sum}</div>)
}

const StatisticLine = ({text,value}) => {
    return (
      <div>
        {text}: {value}
      </div>
    )
}

const Display = (props) => {
  console.log("Display props", props.Ratings)
  return (
    <div>
    <p>Good: {props.Ratings[0]}</p>
    <p>Neutral: {props.Ratings[1]}</p>
    <p>Bad: {props.Ratings[2]}</p>
  </div>
  )
}
const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default App