export default class Header {
    constructor (data) {
        this.heading = "Rider Box";

        this.data = data
    }

    render() {

        return `
        <section class="d-flex justify-content-around bg-black text-white">
            <button type="Button" class="bg-black text-light AddNew" style="border:none"> </a></button>
            <h5 class="mt-2">${this.heading}</h5>
            <div class="mt-2"> </div>
        </section>
        `;
    }
}