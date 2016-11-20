import AppDispatcher from '../dispatchers/appdispatcher.js'
import * as TodoConstants from '../constants/todoconstants.js'

class TodoActions {
  static create(text) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      text: text
    })
  }
  
  static toggleComplete(todo) {
    const id = todo.id
    const actionType = todo.status ? TodoConstants.TODO_UNDO_COMPLETE : TodoConstants.TODO_COMPLETE
    AppDispatcher.dispatch({
      actionType: actionType,
      id: id
    })
  }
  
  static destroyAll() {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY_COMPLETE
    })
  }
}

export default TodoActions