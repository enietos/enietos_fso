import { useState, useEffect } from 'react'
import axios from 'axios'
import noteService from './services/notes'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  useEffect(() => {
    noteService      
    .getAll()      
    .then(initialNotes=> {        
      setNotes(initialNotes)      
    })  
  }, 
  [])

  console.log('render', notes.length, 'notes')
  
  
  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService      
    .update(id, changedNote)      
    .then(response => {        
      setNotes(notes.map(note => note.id !== id ? note : response))      
    })
  }
  const Note = ({ note, toggleImportance }) => {
    const label = note.important
      ? 'make not important' : 'make important'
  
    return (
      <li>
        {note.content} 
        <button onClick={toggleImportance}>{label}</button>
      </li>
    )
  }


 const addNote = (event) => {
  event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }
  

    noteService      
    .create(noteObject)      
    .then(response => {        
      setNotes(notes.concat(response))        
      setNewNote('')      
    })
  }


 const notesToShow = showAll   
 ? notes   
 : importantNotes


 const handleNoteChange = (event) => {   
   console.log(event.target.value)   
   setNewNote(event.target.value)  }
  
 return (
   <div>
     <h1>Notes</h1>
     <div>       
       <button onClick={() => setShowAll(!showAll)}>         
         show {showAll ? 'important' : 'all' }       
         </button>     
         </div>
         <ul>
        {notesToShow.map(note => 
          <Note
            key={note.id}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
     <form onSubmit={addNote}>       
       <input
       value={newNote}
       onChange={handleNoteChange}
       />       
       <button type="submit">save</button>     
       </form>
   </div>
 )
}


export default App