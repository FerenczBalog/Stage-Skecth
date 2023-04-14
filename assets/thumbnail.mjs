import Router from "./Router.mjs";

export default class Thumbnail {

    constructor(props) {
        this.props = props;

        document.addEventListener('click', (e) => (e.target && e.target.classList.contains("link-button")) && this.onLinkClicked(e));
    }

        onLinkClicked(e) {
            e.preventDefault()
            e.stopImmediatePropagation();
            console.log(e)

            const {name, link} = e.target.dataset;
            Router.instance.pushHistory({name, link});
        }

    render() {
        return `        
            <div class="thumbnail">
                <img src="${this.props.image}" class="img-fluid">
                <div class="caption">
                    <h3>${this.props.name}</h3>
                    <p>${this.props.description}</p>
                    <button data-title="${this.props.name}" data-link="/rider?id=${this.props.id}" class="btn btn-primary link-button" role="button">See more</button>
                </div>
            </div>   
        `;
    }
}