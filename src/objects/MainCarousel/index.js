import CarouselImage from "../../components/CarouselImage"
import ChoiceMenu from "../../components/ChoiceMenu"
import "./style.css"

const MainCarousel = ()=>{
    return/* html */ `
        <div class="main-carousel">
            ${CarouselImage('apartment1', '1')}
            ${CarouselImage('apartment2', '2')}
            ${ChoiceMenu()}
            ${CarouselImage('apartment3', '3')}
            ${CarouselImage('apartment4', '4')}
        </div>
    `
}



export default MainCarousel