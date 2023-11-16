// mengambil form elemen
const formElement = document.querySelector('.form-todo');

// menambahkan form event listener
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    // mengambil input elemen html
    const inputElement = document.querySelector('.input-todo');
    console.log(inputElement.value);

    // mengambil wrapper todo elemen sbg entri point todo item
    const wrapperTodoElement = document.querySelector('.wrapper-todo');

    // membuat todo item di js
    // const todoItem = `<li class="todo-item">${inputElement.value}</li>`;
    const todoItem = document.createElement('li');
    todoItem.innerHTML = inputElement.value;

    // menambahkan todo item ke dalam wrapper todo
    // wrapperTodoElement.innerHTML = todoList;
    wrapperTodoElement.append(todoItem);

    // menghapus value setelah submit
    inputElement.value = '';
});