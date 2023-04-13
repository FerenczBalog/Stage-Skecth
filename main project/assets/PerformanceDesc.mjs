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
                    <p>${this.props.description}</p>
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