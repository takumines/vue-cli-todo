// https://jp.vuejs.org/v2/examples/todomvc.html
const STORAGE_KEY = 'todo-app-key'
let todoStorage = {
    fetch() {
        let todos = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || '[]'
        )
        console.log('test')
        todos.forEach(function (todo, index) {
            todo.id = index
        })
        todoStorage.uid = todos.length
        return todos
    },
    save(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
}
export default todoStorage