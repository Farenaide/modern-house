import CarouselImage from "../../components/CarouselImage"
import ChoiceMenu from "../../components/ChoiceMenu"
import "./style.css"

const MainCarousel = ()=>{
    return/* html */ `
        <div class="main-carousel">
            ${CarouselImage('apartment1.jpg', '1')}
            ${CarouselImage('apartment2.jpg', '2')}
            ${ChoiceMenu()}
            ${CarouselImage('apartment3.jpg', '3')}
            ${CarouselImage('apartment4.jpg', '4')}
        </div>
    `
}



export default MainCarousel