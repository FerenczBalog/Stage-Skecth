export default class SinglePhoto {
    constructor(props) {
        this.props = props;
    }

    render() {
        return`
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-8 col-xs-8>
                        <figure="figure">
                            <img src="${this.props.srcImage}" class="figure-img" alt="singlePhotoImage" width="100%">
                        </figure>
                    </div>
                    <div class="col-md-3 offset-md-1 col-xs-3 offset-xs-1">
                        <h3>${this.props.title}</h3>
                        <p>${this.props.desc}</p>
                    </div>
                </div>
            </div>
        `;
    }
}