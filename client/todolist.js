import React from 'react'

const TodoList = (props) => {
  const tasks = props.tasks.map((t, i) => {
    const txtDom = t.status ? (<s>{t.txt}</s>) : t.txt
    return (
      <li key={i} onClick={() => props.emitter.emit('change_status', i)}>
        <input type="checkbox" checked={t.status}/>
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