import Header from "./scripts/header";
import Sidebar from "./scripts/side";
import Flex from "./scripts/flexSideTodo";

export class App {
  constructor() {
    this.root = document.getElementById("root");
    this.container = document.createElement("div");
    const form = document.querySelector(".todo-container");  // Получаем элемент формы из DOM
    this.container.classList.add("container");

    this.div = new Flex();
    this.header = new Header();
    this.side = new Sidebar();

    // Добавляем элементы, вызывая render() только для экземпляров классов
    this.container.append(this.header.render(), this.div.render()); 
    this.root.append(this.container);
  }

  render() {
    return this.root;
  }
}

export default App;