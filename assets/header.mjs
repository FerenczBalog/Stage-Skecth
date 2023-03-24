//import AddNew from "/assets/AddNew.mjs";
import Select from "/assets/Select.mjs";

export default class Header {
    constructor (data) {
        this.heading = "Rider Box";

        this.data = data
        this.selections = []

      //  console.log(this.data)
       
    } 

    componentWillRender() {
        if(this.selections.lenght > 0) {
            return;
        }
        this.data.forEach(selection => this.selections.push(new Select(selection)))
    }

    getOptions() {
        fetch(`data.json`, {
            method: `GET`,
        })
        .then(response => response.json())
        .then(data => {
            data.forEach(title => {
                const option = document.createElement("option")
                option.value = title.id;
                option.text = title.name;
    
                if(title.id == "01") {
                    option.setAttribute("Selected", true)
                    option.selected = true;
                }
                new Select().appendChild(option);
            })
        })
        .catch((error) => {
            console.error(`Error:`, error);
        });
    }


    render() {

       
        this.componentWillRender();
       // let selectionsHTML = "";
       // this.selections.forEach(selection => selectionsHTML += selection.render())

        return `
        <section class="d-flex justify-content-around bg-black text-white">
            <button type="Button" class="bg-black text-light AddNew" style="border:none">New Performance</a></button>
            <h5 class="mt-2">${this.heading}</h5>
            <div class="mt-2">${this.getOptions()}</div>
        </section>
        `;
    }
}