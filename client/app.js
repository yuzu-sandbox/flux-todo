import React from 'react'
import {EventEmitter} from 'events'
import AddTodo from './addtodo.js'
import TodoList from './todolist.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
    this.emitter = new EventEmitter()
  }
  
  componentDidMount() {
    this.emitter.on('add_todo', this.addTask.bind(this))
    this.emitter.on('change_status', this.changeStatus.bind(this))
  }
  
  addTask(todo) {
    console.log('add_todo', todo)
    this.setState({
      tasks: this.state.tasks.concat(todo)
    })
  }
  
  changeStatus(idx) {
    console.log('change_status', idx)
    const newTasks = this.state.tasks.map((t, i) => {
      if(i === idx) {
        t.toggleStatus()
      }
      return t
    })
    this.setState({
      tasks: newTasks
    })
  }
  
  render() {
    return (
      <div>
        <TodoList emitter={this.emitter} tasks={this.state.tasks}></TodoList>
        <AddTodo emitter={this.emitter}></AddTodo>
      </div>
    )
  }
}