export default class Carousel {
    constructor () {

    }

    render() {
        return `
        <div class="slideshow-container">

            <div class="mySlides fade" style="display: block;">
                <div class="numbertext">1 / 4</div>
                <img src="${this.props.photo1}">
                <div class="text">   </div>
            </div>

            <div class="mySlides fade" style="display: none;">
                <div class="numbertext">2 / 4</div>
                <img src="${this.props.photo2}">
                <div class="text">   </div>
            </div>

            <div class="mySlides fade" style="display: none;">
                <div class="numbertext">3 / 4</div>
                <img src="${this.props.photo3}">
                <div class="text">   </div>
            </div>

            <div class="mySlides fade" style="display: none;">
                <div class="numbertext">4 / 4</div>
                <img src="${this.props.photo1}">
                <div class="text">   </div>
            </div>

            <a class="prev" onclick="plusSlides(-1)">❮</a>
            <a class="next" onclick="plusSlides(1)">❯</a>
        </div>
        `
    }
}