import Sidebar from "./side";
import Todo from "./todoDate"; 
import localStore from "./localeStorage";  

export class Flex {
    constructor() {
        this.div = document.createElement("div");
        this.div.classList.add("flex");

        const form = document.querySelector(".todo-container");
        this.side = new Sidebar();

        this.todos = localStore.getDataFromStore() || [];  // Загружаем задачи из localStorage или создаем пустой массив
        
        // Устанавливаем flexInstance для всех загруженных задач
        this.todos.forEach(todo => todo.flexInstance = this);

        this.todoListElement = document.getElementById('todo-list');
        this.todoForm = document.getElementById('todo-form');
        this.todoForm.addEventListener('submit', (e) => this.addTodoHandler(e));

        this.div.append(this.side.render());
        this.div.append(this.todoListElement, form);

        this.renderTodos();  // Рендер задач при инициализации
    }

    removeTodo(todoId) {
        // Фильтруем задачи и исключаем ту, которую хотим удалить
        this.todos = this.todos.filter(todo => todo.id !== todoId);
        
        // Перерисовываем список задач
        this.renderTodos();
        
        // Сохраняем обновленный список задач в локальное хранилище
        localStore.saveDataToStore(this.todos); 
    }
    
    addTodoHandler(e) {
        e.preventDefault();

        const titleInput = document.getElementById('todo-title');
        const descriptionInput = document.getElementById('todo-description');

        const newTodo = new Todo(titleInput.value, descriptionInput.value);
        newTodo.flexInstance = this;  // Устанавливаем ссылку на текущий экземпляр Flex

        this.todos.push(newTodo);
        this.renderTodos();

        titleInput.value = '';
        descriptionInput.value = '';

        localStore.saveDataToStore(this.todos);  // Сохраняем состояние задач
    }

    renderTodos() {
        this.todoListElement.innerHTML = ''; 
        this.todos.forEach((todo) => {
            const todoElement = todo.render();
            this.todoListElement.appendChild(todoElement);
        });
    }

    render() {
        return this.div;
    }
}

export default Flex;
