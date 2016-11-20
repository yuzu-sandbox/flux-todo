import { EventEmitter } from 'events'
import AppDispatcher from '../dispatchers/appdispatcher.js'
import * as TodoConstants from '../constants/todoconstants.js'
import Todo, {TODO_COMPLETE, TODO_NOT_COMPLETE} from '../model/todo.js'

const CHANGE_EVENT = 'change'

const _todos = {}

function create(text) {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
  _todos[id] = new Todo(id, text);
}

function update(id, status) {
  _todos[id].changeStatus(status)
}

function destory(id) {
  delete _todos[id]
}

function completeDestory() {
  for(let id in _todos) {
    if(_todos[id].status) {
      destory(id)
    }
  }
}

//viewにeventとdataの提供
class TodoStore extends EventEmitter {
  constructor() {
    super()
  }

  getAll() {
    return _todos;
  }
  
  emitChange() {
    this.emit(CHANGE_EVENT)
  }
  
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb)
  }
  
  removeEventListener(cb) {
    this.removeListener(CHANGE_EVENT, cb)
  }
}
let todoStoreInstance = new TodoStore()

//actionからのリスナー
AppDispatcher.register((action) => {
  switch(action.actionType) {
    case TodoConstants.TODO_COMPLETE:
      update(action.id, TODO_COMPLETE)
      todoStoreInstance.emitChange()
      break;
    case TodoConstants.TODO_CREATE:
       const text = action.text.trim()
       if(text !== '') {
         create(text)
         todoStoreInstance.emitChange()
       }
       break;
    case TodoConstants.TODO_DESTROY_COMPLETE:
      completeDestory()
      todoStoreInstance.emitChange()
      break;
    case TodoConstants.TODO_UNDO_COMPLETE:
      update(action.id, TODO_NOT_COMPLETE)
      todoStoreInstance.emitChange()
      break;
    default:
      //no op
  }
})

export default todoStoreInstance