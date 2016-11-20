import React from 'react'
import Task from './model/todo.js'
import TodoAction from './actions/todoactions.js'

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoTxtValue: ''
    }
  }

  _onAdd() {
    TodoAction.create(this.state.todoTxtValue)
    this.setState({
      todoTxtValue: ''
    })
  }
  
  _onChange(e) {
    this.setState({todoTxtValue: e.target.value})
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