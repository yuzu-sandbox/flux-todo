import React from 'react'
import Task from './model/todo.js'

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'todoTxtValue': ''
    }
  }

  _onAdd() {
    if (this.state.todoTxt !== '') {
      const task = new Task(this.state.todoTxtValue)
      this.props.emitter.emit('add_todo', task)
      this.setState({
        'todoTxtValue': ''
      })
    }
  }
  
  _onChange(e) {
    this.setState({'todoTxtValue': e.target.value})
  }
  
  render() {
    return (
      <div>
        <input type="text" value={this.state.todoTxtValue} onChange={this._onChange.bind(this)}/>
        <button onClick={() => this._onAdd()}>追加</button>
      </div>
    )
  }
}