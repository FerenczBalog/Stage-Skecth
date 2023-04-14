import Carousel from "./carousel.mjs";

export default class PerformanceDesc {
    constructor (props) {
        this.props = props;

        //console.log(this.props)
    }

    render() {
        return`
            <div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; margin: 5rem 10rem 5rem 10rem">

                        <div>
                        <h2>${this.props.name}</h2>
                        <p>Felújítva: ${this.props.year}</p>
                        <p>Rendező: ${this.props.director}</p>
                        <p>Előadók: ${this.props.actors}</p>
                        <p>Ügyelő: ${this.props.stageDir}</p>
                        <p>Hangosító: ${this.props.sound}</p>
                        <p>Világosító: ${this.props.light}</p>
                        <p>Díszítők: ${this.props.stageTech}</p>
                        </br></br>

                        <h5>Technikai leírás: </h5> 
                        </br>

                        <h6>Helyi színpad: </h6> 
                        </br>

                        <p>Igények: ${this.props.needs}</p>
                        <p>Szerelési idő: ${this.props.time}</p>
                        <p>Méretek: ${this.props.sizes}</p>
                        <p>Megjegyzés: ${this.props.notes}</p>
                        <p>Extra hang: ${this.props.ExtraSound}</p>
                        <p>Extra fény: ${this.props.ExtraLights}</p>
                        </br>

                        <h6>Kiszállás: </h6> </br>

                        <p>Igények: ${this.props.needsOut}</p>
                        <p>Szerelési idő: ${this.props.timeOut}</p>
                        <p>Méretek: ${this.props.sizes}</p>
                        <p>Megjegyzés: ${this.props.notesOut}</p>
                        <p>Extra hang: ${this.props.ExtraSoundOut}</p>
                        <p>Extra fény: ${this.props.ExtraLightsOut}</p>
                        </br></br>

                        <h5>Díszítői közremükődés: </h5> </br>
                        <p>${this.props.techAssistLeft}</p>
                    
                    </div>

                    <div style="margin-left: 5rem">  
                        ${new Carousel().render()}                        
                    </div>

                </div>



            </div>            
        `
    }
}