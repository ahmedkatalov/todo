
import iconUser from "../../../img/png-klev-club-0lct-p-plyus-znak-png-29.png";
export class Sidebar {
    constructor() {
        const todoInputs = document.querySelector("#todos")
        const formButton = document.querySelector("#form-button")
    this.sidebar = document.createElement("div"); 
    this.sidebar.classList.add("sidebar"); 

    const user = document.createElement("div");
    user.classList.add("user-block");

    const addUser = document.createElement("div");
    addUser.classList.add("addUser");
    this.titleSide = document.createElement("h3");
    this.titleSide.textContent = "Добавить ToDo";
    this.icon = document.createElement("img");
    this.icon.src = iconUser;
    addUser.append(this.icon, this.titleSide);



    addUser.addEventListener("click", () => {
        todoInputs.style.display = "flex"
        formButton.addEventListener("click", () => {
            todoInputs.style.display = "none"
     })
    });

    user.append(addUser);
    this.sidebar.append(user); 
  }

  render() {
    return this.sidebar; 
  }
}

export default Sidebar;

