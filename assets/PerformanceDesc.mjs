import Router from "./Router.mjs"

export default class PerformanceDesc {
    constructor (props) {
        this.props = props;

        console.log(this.props)
        document.addEventListener('click', (e) => (e.target && e.target.classList.contains("link-button")) && this.onLinkClicked(e));
    }

        onLinkClicked(e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            const {name, link} = e.target.dataset;
            Router.instance.pushHistory({name, link});
        }

    render() {
        return`
            <div class="d-flex justify-content-center flex-reverse mt-5 mb-5">
                <div class="col-4">
                    <h2>${this.props.name}</h2>
                    <div style="font-size: 0.8rem; margin-right: 3rem">
                        <p><strong>Felújítás/Bemutató:</strong> ${this.props.year}</p>
                        <p><strong>Rendező:</strong> ${this.props.director}</p>
                        <p><strong>Előadók:</strong> ${this.props.actors}</p>
                        <p><strong>Ügyelő:</strong> ${this.props.stageDir}</p>
                        <p><strong>Hangosító:</strong> ${this.props.sound}</p>
                        <p><strong>Világosító:</strong> ${this.props.light}</p>
                        <p><strong>Díszítők:</strong> ${this.props.stageTech}</p>
                        <p><strong>Szállítás:</strong> ${this.props.transport}</p>
                    </div>
                </div>

                <div class="col-4">
                    <p>
                        <img src="${this.props.image}" class="img-fluid">
                    </p>
                    <button data-title="${this.props.name}" data-link="/rider?id=${this.props.id}" class="btn bg-black text-white link-button" role="button">Részletek</button>

                </div>
            </div>            
        `
    }
}