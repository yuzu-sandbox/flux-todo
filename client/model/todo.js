export default class Todo {
  constructor(txt) {
    this.txt = txt
    this.status = false
  }
  
  toggleStatus() {
    this.status = !this.status
  }
}
