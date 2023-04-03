import CarouselImage from "../../components/CarouselImage"
import ChoiceMenu from "../../components/ChoiceMenu"
import "./style.css"

const MainCarousel = ()=>{
    return/* html */ `
        <div class="main-carousel">
            <div class="main-carousel__menu">
                ${ChoiceMenu()}
            </div>
            <div class="main-carousel__image">
                ${CarouselImage('apartment1.jpg')}
            </div>
            <div class="main-carousel__image --margin">
                ${CarouselImage('apartment2.jpg')}
            </div>
            <div class="main-carousel__image">
                ${CarouselImage('apartment3.jpg')}
            </div>
            <div class="main-carousel__image">
                ${CarouselImage('apartment4.jpg')}
            </div>
        </div>
    `
}
export default MainCarousel