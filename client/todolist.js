import React from 'react'
import TodoAction from './actions/todoactions.js'

const TodoList = (props) => {
  const tasks = Object.keys(props.tasks).map((key) => {
    const task = props.tasks[key]
    const txtDom = task.status ? (<s>{task.txt}</s>) : task.txt
    return (
      <li key={key} onClick={() => TodoAction.toggleComplete(task)}>
        <input type="checkbox" checked={task.status}/>
        {txtDom}
      </li>
    )
  })

  return (
    <ul>
      {tasks}
    </ul>
  )
}

export default TodoList