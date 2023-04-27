export default class Rider {
    constructor (props) {
        this.props = props;
    }

    render() {
        return`
            <div">
                <div style="text-align: center; margin-top: 2rem">
                    <h2>${this.props.name}</h2></br>
                    <p><strong>Felújítva:</strong> ${this.props.year}</p>
                    <p><strong>Rendező:</strong> ${this.props.director}</p>
                    <p><strong>Előadók:</strong> ${this.props.actors}</p>
                    <p><strong>Ügyelő:</strong> ${this.props.stageDir}</p>
                    <p><strong>Hangosító:</strong> ${this.props.sound}</p>
                    <p><strong>Világosító:</strong> ${this.props.light}</p>
                    <p><strong>Díszítők:</strong> ${this.props.stageTech}</p>
                    </br></br>
                </div>
                <div class="container text-start mx-3">

                    <div class="row gap-5">
                        <div class= col-md-5>
                            <h5><strong>Technikai leírás:</strong> </h5> 
                            </br>

                            <h6><strong>Helyi színpad:</strong> </h6> 
                            </br>

                            <p><strong>Igények:</strong> ${this.props.needs}</p>
                            <p><strong>Szerelési idő:</strong> ${this.props.time}</p>
                            <p><strong>Méretek:</strong> ${this.props.sizes}</p>
                            <p><strong>Megjegyzés:</strong> ${this.props.notes}</p>
                            <p><strong>Extra hang:</strong> ${this.props.ExtraSound}</p>
                            <p><strong>Extra fény:</strong> ${this.props.ExtraLights}</p>
                            </br>

                            <h6><strong>Kiszállás:</strong> </h6> </br>

                            <p><strong>Igények:</strong> ${this.props.needsOut}</p>
                            <p><strong>Szerelési idő:</strong> ${this.props.timeOut}</p>
                            <p><strong>Méretek:</strong> ${this.props.sizes}</p>
                            <p><strong>Megjegyzés:</strong> ${this.props.notesOut}</p>
                            <p><strong>Extra hang:</strong> ${this.props.ExtraSoundOut}</p>
                            <p><strong>Extra fény:</strong> ${this.props.ExtraLightsOut}</p>
                            </br></br>                    
                        </div>

                        <div class= col-md-5>
                            <h5><strong>Díszítői közremükődés:</strong> </h5> </br>
                            <p>${this.props.techAssistLeft}</p>
                        </div>
                    <div >
                </div>

                <div>
                    <div style=" display: flex; flex-direction: column-reverse; align-items:center; width: 80%; margin-left:10%; margin-bottom:5rem">  

                        <div id="carouselExampleIndicators" class="carousel slide mt-5 mb-5">

                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 0"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 6"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 7"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 8"></button>
                            </div>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="${this.props.carousel.image1}" class="d-block w-100" alt="kivancsiElefatKolyok1">
                                </div>
                                <div class="carousel-item">
                                    <img src="${this.props.carousel.image2}" class="d-block w-100" alt="kivancsiElefatKolyok2">
                                </div>
                                <div class="carousel-item">
                                    <img src="${this.props.carousel.image3}" class="d-block w-100" alt="kivancsiElefatKolyok3">
                                </div>
                                <div class="carousel-item">
                                    <img src="${this.props.carousel.image4}" class="d-block w-100" alt="kivancsiElefatKolyok4">
                                </div>
                                <div class="carousel-item">
                                    <img src="${this.props.carousel.image5}" class="d-block w-100" alt="kivancsiElefatKolyok5">
                                </div>
                                <div class="carousel-item">
                                    <img src="${this.props.carousel.image6}" class="d-block w-100" alt="kivancsiElefatKolyok6">
                                </div>
                                <div class="carousel-item">
                                    <img src="${this.props.carousel.image7}" class="d-block w-100" alt="kivancsiElefatKolyok7">
                                </div>
                                <div class="carousel-item">
                                    <img src="${this.props.carousel.image8}" class="d-block w-100" alt="kivancsiElefatKolyok8">
                                </div>
                                <div class="carousel-item">
                                    <img src="${this.props.carousel.image9}" class="d-block w-100" alt="kivancsiElefatKolyok9">
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>

                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                            </button>
                        </div> 
                        
                        <div>
                            <img src="${this.props.sketch}" class="d-block w-100" alt="kivancsiElefatKolyoksketch">
                        </div>

                    </div>
                </div>
            </div>            
        `
    }
}