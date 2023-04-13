import PerformanceDesc from "/assets/PerformanceDesc.mjs";

export default class Section {    
   constructor (data) {
        this.data = data;
        //console.log(data)
        this.descriptions = []
    }     

    componentWillRender() {
        if(this.descriptions.lenght > 0) {
            return;
        }
        this.data.forEach(description => this.descriptions.push(new PerformanceDesc(description)))
    }

    render() {
        this.componentWillRender();
        let descriptionsHTML = "";
        this.descriptions.forEach(description => descriptionsHTML += description.render());
        return`
            <section>
                ${descriptionsHTML}
            </section>
        `
    }
}