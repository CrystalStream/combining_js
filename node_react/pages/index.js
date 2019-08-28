import React, { useState } from "react"

function ToDo(props) {

  const [ task, updateTask ] = useState("")
  const [ todos, setTodos ] = useState([])

  function addTodo(newTask) {
    if (todos.length < props.todosCount) {
      const allTodos = [...todos, newTask]
      setTodos(allTodos)
      updateTask("")
      return
    }

    alert('Cant create more than ' + props.todosCount + 'todos for this list')
  }

  return (
    <div className="word-container">
      <p>You still can add {props.todosCount - todos.length} of {props.todosCount}</p>
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
  )
}

ToDo.getInitialProps = async ({ req }) => {
  // Get your props from whatever you want
  return { todosCount: 5 }
}

export default ToDo
