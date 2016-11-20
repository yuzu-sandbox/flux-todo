import React from 'react'
import TodoStore from './stores/todostore.js'
import TodoAction from './actions/todoactions.js'
import AddTodo from './addtodo.js'
import TodoList from './todolist.js'

function getTodo() {
  return {
    tasks: TodoStore.getAll()
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = getTodo()
  }
  
  _onChange() {
    this.setState(getTodo())
  }
  
  _onCompleteDelete() {
    
  }
  
  componentDidMount() {
    TodoStore.addChangeListener(this._onChange.bind(this))
  }
  
  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange.bind(this))
  }
  
  render() {
    return (
      <div>
        <TodoList tasks={this.state.tasks}></TodoList>
        <AddTodo />
        <button onClick={() => TodoAction.destroyAll()}>Complete Delete</button>
      </div>
    )
  }
}