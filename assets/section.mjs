import PerformanceDesc from "/assets/PerformanceDesc.mjs";

export default class Section {    
   constructor (data) {
        this.data = data;
        //console.log(data)
        this.descriptions = []
    }     

    get thumbnailMarkup() {
        let thumbnailsHTML = "";
        this.descriptions.forEach(description => thumbnailsHTML += `${description.render()}`);    

        return thumbnailsHTML;
    }

    componentWillRender() {
        if(this.descriptions.lenght > 0) {
            return;
        }
        this.data.forEach(description => this.descriptions.push(new PerformanceDesc(description)));
    }

    render() {
        this.componentWillRender(); 

        return`
            <section>
                ${this.thumbnailMarkup}
            </section>
        `
    }
}