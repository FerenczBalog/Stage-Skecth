export default class Select {
    constructor(props) {
        this.props = props
       console.log(this.props)
    }
    render() {
        return `
        <select class=" form-select bg-black text-light rounded-2 border-dark">
            <option>${this.props.name}</option>
        </select>
        `;
    }
}
