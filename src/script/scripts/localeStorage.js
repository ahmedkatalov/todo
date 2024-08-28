import Todo from "./todoDate";

class LocalStore {
    saveDataToStore(todos) {
        const data = todos.map(todo => todo.toJSON()); 
        localStorage.setItem('todos', JSON.stringify(data));  
    }

    getDataFromStore() {
        const data = localStorage.getItem('todos');
        if (data) {
            const parsedData = JSON.parse(data);
            return parsedData.map(todoData => {
                const { title, description, id, checked, date } = todoData;
                const todo = new Todo(title, description, id, checked, new Date(date));  
                return todo;
            });
        }
        return [];
    }
}

export default new LocalStore();
