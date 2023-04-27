export default class PerformanceDesc {
    constructor (props) {
        this.props = props;

        //console.log(this.props)
    }

    render() {
        return`
            <div class="d-flex justify-content-center flex-reverse mt-5">
                <div class="col-4">
                    <h2>${this.props.name}</h2>
                    <p><strong>Felújítás/Bemutató:</strong> ${this.props.year}</p>
                    <p><strong>Rendező:</strong> ${this.props.director}</p>
                    <p><strong>Előadók:</strong> ${this.props.actors}</p>
                    <p><strong>Ügyelő:</strong> ${this.props.stageDir}</p>
                    <p><strong>Hangosító:</strong> ${this.props.sound}</p>
                    <p><strong>Világosító:</strong> ${this.props.light}</p>
                    <p><strong>Díszítők:</strong> ${this.props.stageTech}</p>
                    <p><strong>Szállítás:</strong> ${this.props.transport}</p>
                </div>

                <div class="col-4">
                    <p>
                        <img src="${this.props.image}" class="img-fluid">
                    </p>
                </div>
            </div>            
        `
    }
}