import React, { useState } from "react"
import ReactDOM from 'react-dom';

function ToDo(props) {

  const [ task, updateTask ] = useState("")
  const [ todos, setTodos ] = useState([])

  function addTodo(newTask) {
    if (todos.length < props.todoscount) {
      const allTodos = [...todos, newTask]
      setTodos(allTodos)
      updateTask("")
      return
    }

    alert('Cant create more than ' + props.todoscount + 'todos for this list')
  }


  return (
    <>
      <div className="word-container">
        <p>You still can add {props.todoscount - todos.length} of {props.todoscount}</p>
        <input
          type="text"
          value={task}
          autoFocus
          onChange={(e) => updateTask(e.target.value)}
        />
        <button onClick={() => addTodo(task)}>Add</button>
        <hr />
        <ul>
          {todos.map((t, i) => (<li key={t+i}>{t}</li>))}
        </ul>
      </div>
    </>
  )
}

if (document.getElementById('app')) {
    const element = document.getElementById('app')
      
    // create new props object with element's data-attributes
    const props = Object.assign({}, element.dataset)
    console.log('props', props)

    ReactDOM.render(<ToDo {...props}/>, element);
}
