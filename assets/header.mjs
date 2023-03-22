import AddNew from "/assets/AddNew.mjs";
import Select from "/assets/Select.mjs";

export default class Header {
    constructor () {
        this.heading = "Rider Box";
        this.select = new Select().render()
        this.addnew = new AddNew().render()
    }

    render() {
        return `
        <section class="d-flex justify-content-around bg-black text-white">
            <button type="Button" class="bg-black text-light" style="border:none">New Performance</a></button>
            <h5 class="mt-2">${this.heading}</h5>
            <p class="mt-2">${this.select}</p>
        </section>
        `;
    }
}