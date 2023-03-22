import PerformanceDesc from "/assets/PerformanceDesc.mjs";

export default class Section {
    constructor () {
        
    }

    render() {
        return`
            <section>
                ${new PerformanceDesc().render()}
            </section>
        `
    }
}