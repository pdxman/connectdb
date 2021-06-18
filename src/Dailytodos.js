import React, {useState, useEffect} from 'react'
import firebase from './firebase/Firebase'
import { v4 as uuidv4 } from 'uuid'

function Dailytodos() {

  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const initstate = { text: '', complete: false, id: uuidv4() }
  const [inputs, setInputs] = useState(initstate)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    
    getTodos()

    setLoading(false)
  }, [])

  
  const getTodos = () => {
    firebase.db.collection('todos').get()
      .then(querySnapshot => {
      querySnapshot.forEach( doc => {
        setTodos(prev => ([...prev, doc.data()]))
      })
    })
    .catch(err => {
      console.log(err.message)
    })
  }



  const sendTodo = (e) => {
    e.preventDefault()  
    firebase.db.collection('todos').add(inputs)
    .then( async documentReference => {
      console.log('document reference ID', documentReference.id)
      await setTodos([])
      getTodos()
      })
    .catch(error => {
      console.log(error.message)
    }) 
  } 

  const handleChange = e => {
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value}))
  }

  return (
    <>
    <div className="main-todo-list-wrapper">
      <h2>Daily Everyday Todos</h2>
     <div style={{ width: '100%' }}>
        <form onSubmit={sendTodo}>
          <input 
            name="text"
            placeholder="send it!"
            value={inputs.text}
            onChange={handleChange}
          />
          <button onClick={sendTodo}>click here to send</button>
        </form>    
    </div>    
     <div style={{ width: '100%' }}>
      { loading ? (<div><p class="loading">waiting patiently for the STUFF!</p></div>) : (
        <ul>
        {todos.map(todo => (
          <li id={todo.id}>
            <input type="checkbox"></input>
            <span className="list-text">{todo.text}</span>
          </li>
        ))}
      </ul>
     )}
     
     </div>
    </div>
    </>
    
  );
};
export default Dailytodos;
