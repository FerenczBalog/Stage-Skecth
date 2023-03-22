import Header from "./assets/Header.mjs";
import Section from "./assets/Section.mjs";

class App {
    render(container) {
    const main = document.createElement("main");
    const documentFragment = document.createDocumentFragment();

    main.classList.add("app");
    main.innerHTML =
    `
        ${new Header().render()}
        ${new Section().render()}
    `;

    documentFragment.appendChild(main);
    container.appendChild(documentFragment.firstElementChild);

    }
}

const app = new App()
app.render(document.querySelector("body"));