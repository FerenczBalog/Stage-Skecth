import Header from "./assets/Header.mjs";
import Section from "./assets/Section.mjs";
import DataHandler from "./assets/dataHandler.mjs"

class App {

    constructor() {
        this.data = []
    }
     
   async render(container) {
        this.data = await DataHandler.fetchData()

        const main = document.createElement("main");
        const documentFragment = document.createDocumentFragment();

        main.classList.add("app");
        main.innerHTML =
        `
            ${new Header(this.data).render()}
            ${new Section(this.data).render()}
        `;

        documentFragment.appendChild(main);
        container.appendChild(documentFragment.firstElementChild);

    }
}

const app = new App()
app.render(document.querySelector("body"));