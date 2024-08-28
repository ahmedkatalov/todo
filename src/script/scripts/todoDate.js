// Todo Class
import localStore from "./localeStorage";
export class Todo {
    constructor(title, description, id = null, checked = false, date = new Date()) {
        this.title = title;
        this.description = description;
        this.checked = checked;
        this.id =  Date.now(); 
        this.date = date;
        this.flexInstance = null; 
    }

    toggleChecked() {
        this.checked = !this.checked; 
        if (this.flexInstance) {
            localStore.saveDataToStore(this.flexInstance.todos);  // Сохраняем изменения в локальное хранилище
        }
    }

    render() {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');
        if (this.checked) {
            todoElement.classList.add('completed');
        }

        const titleElement = document.createElement('h3');
        titleElement.textContent = `#${this.title}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = this.description;

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.textContent = "Remove";

        // Обработчик для кнопки удаления
        removeButton.addEventListener('click', () => {
            if (this.flexInstance) {
                this.flexInstance.removeTodo(this.id); 
            }
        });

        const dateElement = document.createElement('small');
        dateElement.textContent = `Created on: ${this.date.toLocaleString()}`;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = this.checked;

        // Обработчик для чекбокса
        checkbox.addEventListener('change', () => {
            this.toggleChecked();
            if (this.checked) {
                todoElement.classList.add('completed');
            } else {
                todoElement.classList.remove('completed');
            }
        });

        todoElement.append(titleElement, descriptionElement, checkbox, dateElement, removeButton);
        return todoElement;
    }

    toJSON() {
        return {
            title: this.title,
            description: this.description,
            checked: this.checked,
            id: this.id,
            date: this.date.toISOString()
        };
    }
}

export default Todo;
