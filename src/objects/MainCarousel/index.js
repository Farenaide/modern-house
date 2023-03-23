import CarouselImage from "../../components/CarouselImage"
import "./style.css"

const MainCarousel = ()=>{
    return/* html */ `
        <div class="main-carousel">
            ${CarouselImage('apartment2')}
            ${CarouselImage('apartment1')}
            ${CarouselImage('apartment3')}
        </div
    `
}

export default MainCarousel