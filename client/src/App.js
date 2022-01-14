import './App.css'
import { addNote, setInput } from './context/Action';
import { useStore } from './context/hooks'
import {useRef} from 'react'
function App() {
  const inputRef = useRef()
  const [state, dispatch] = useStore()
  console.log(state);
  console.log(inputRef);
  return (
    <div>
      <input
        value={state.todoInput}
        ref={inputRef}
        placeholder='Enter a note'
        onChange={e => dispatch(setInput(e.target.value))}
      >
      </input>
      <button onClick={() => {
        dispatch(addNote(state.todoInput))
        inputRef.current.focus()
        }}>ADD</button>
      <ul>
        {state.todos.map(todo => {
          return <li key={todo}>{todo}</li>
        })}
      </ul>
    </div>
  )
}

export default App;
