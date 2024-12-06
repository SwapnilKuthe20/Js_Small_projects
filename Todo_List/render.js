import store from "./store.js";

function render() {
    // console.log(store, "....store");

    const todos = document.querySelector('.todos');
    // console.log(todos, '...todos ul');

    const todoElements = store.todos.map((todo) =>

        `
           <li class="todo" data-id=${todo.id} >
            <span class="todo-title ${todo.completed ? "completed" : ""}">${todo.tittle}</span>
            <div class="toggle-delete">
                <input type="checkbox" name="completed" class="todo-checkbox" ${todo.completed ? "checked" : ""} />
                <button class="delete-todo-button">X</button>
            </div>
        </li>
        `
    ).join('');

    // console.log(todoElements,'...todoElements');

    todos.innerHTML = todoElements;
}

export default render;