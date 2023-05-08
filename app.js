import Header from "./assets/Header.mjs";
import Router from "./assets/Router.mjs";
import Section from "./assets/Section.mjs";
import DataHandler from "./assets/dataHandler.mjs"
import Footer from "./assets/footer.mjs";
import Rider from "./assets/rider.mjs";

class App {

    constructor() {
        this.data = null;

        Router.instance.subscribe(this.onRoutChanged.bind(this))
    }

    cleanApp() {
        const app = document.querySelector(".app");

        if(app) {
            document.querySelector("body").removeChild(app);
        }
    } 
     
    onRoutChanged(state) {
        this.render(state);
    }

    componentToRender(state) {
        if (state === null || state.link === `/`) {
            return new Section(this.data).render();
        }

        if (state.link.includes("/rider?id")) {
            const riderData = this.data.find(d => d.id == state.link.split("=")[1])

            if (riderData) {
                return new Rider(riderData).render()
            }
        }
        return `<h1 class="text-center">"Page not found"</h1>`
    }

   async render(state = null) {
        if(this.data == null) {
            this.data = await DataHandler.instance.fetchData();
        } 
        this.cleanApp()

        const main = document.createElement("main");
        const documentFragment = document.createDocumentFragment();

        main.classList.add("app");
        main.innerHTML =
        `
            ${new Header(this.data).render()}
            ${this.componentToRender(state)}
            ${new Footer().render()}
        `;

        documentFragment.appendChild(main);
        document.querySelector("body").appendChild(documentFragment.firstElementChild);
    }
}

const app = new App()
app.render();