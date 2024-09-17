import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const handleRandomClick = () => {setSelected(getRandomInt)
    console.log("Random anecdote gotten, random number is", selected)
  }
  
  const handleResetClick = () => {
    const zeroPoints = Array(anecdotes.length).fill(0)
    setPoints(zeroPoints)
  }

  const handleVoteClick = () => {
    const updatedPoints = [...points]
    updatedPoints[selected] = updatedPoints[selected]+1
    setPoints(updatedPoints)
    console.log("Vote given, random number is", selected, "total votes", updatedPoints)
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * anecdotes.length);
  }

  return (
    <div>
      {anecdotes[selected]}
      <br></br>
      <Button onClick={handleRandomClick} text ="Random anecdote" />
      <Button onClick={handleVoteClick} text = "Vote"/>
      <Button onClick={handleResetClick} text = "Reset"/>
      <br></br>
      <h1>Anecdote with the most votes:</h1>
      <TopAnecdote votesArray = {points} Anecdotes={anecdotes}/>
    </div>
  )
}

const TopAnecdote = (props) =>{
  const topAnecdoteVotes = Math.max(...props.votesArray)
  console.log('Max votes', topAnecdoteVotes)
  const topchoice = (element) => element >= topAnecdoteVotes
  const topindex = props.votesArray.findIndex(topchoice)
  console.log('Max index', topindex)
  return(
    props.Anecdotes[topindex]
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
