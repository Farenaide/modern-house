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
                ${CarouselImage('apartment1.jpg','Interior apartment 1')}
            </div>
            <div class="main-carousel__image --margin">
                ${CarouselImage('apartment2.jpg','Interior apartment 2')}
            </div>
            <div class="main-carousel__image">
                ${CarouselImage('apartment3.jpg', 'Interior apartment 3')}
            </div>
            <div class="main-carousel__image">
                ${CarouselImage('apartment4.jpg', 'Interior apartment 4')}
            </div>
        </div>
    `
}
export default MainCarousel