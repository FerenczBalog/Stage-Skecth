export default class Footer {
    constructor() {
        this.copyright ="Balog Ferencz - 2023"
        this.mobile = "0752813860"
        this.mail = "balogferencz.artist@gmail.com"
    }

    render() {
        return`
            <section class="d-flex justify-content-around bg-black text-white">
                <p class="mt-4">${this.mobile}</p>
                <p class="text-center mt-3">&#169; ${this.copyright} </br> <small>All rights reserved!</small></p>
                <p  class="mt-4">${this.mail}</p>
            </section>
        `
    }
}