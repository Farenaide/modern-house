import "./style.css"

const CarouselImage = (content)=>{
    return/* html */ `
        <figure class="carousel-image">
            <img class="carousel-image__img" src="src/assets/pictures/${content}.jpg" alt="">
        </figure>
    `
}

export default CarouselImage