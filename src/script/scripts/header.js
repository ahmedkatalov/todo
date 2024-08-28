export class Header {
    constructor() {
        this.header = document.createElement ("div")
        this.header.classList.add("header")
        const headerTitle = document.createElement("h1"); 
        headerTitle.innerHTML = `To<span>Do</span>`; 
        this.header.append(headerTitle)
    }
    render() {
        return this.header
    }
}

export default Header