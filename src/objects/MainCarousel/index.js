import CarouselImage from "../../components/CarouselImage"
import ChoiceMenu from "../../components/ChoiceMenu"
import "./style.css"

const MainCarousel = ()=>{
    return/* html */ `
        <div class="main-carousel">
            ${CarouselImage('apartment1')}
            ${CarouselImage('apartment2')}
            ${ChoiceMenu()}
            ${CarouselImage('apartment3')}
            ${CarouselImage('apartment4')}
        </div>
    `
}



export default MainCarousel