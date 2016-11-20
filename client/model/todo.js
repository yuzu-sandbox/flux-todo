export default class Todo {
  constructor(id, txt) {
    this.id = id
    this.txt = txt
    this.status = false
  }
  
  changeStatus(status) {
    this.status = status
  }
}

const TODO_COMPLETE = true
const TODO_NOT_COMPLETE = false
export {TODO_COMPLETE, TODO_NOT_COMPLETE}