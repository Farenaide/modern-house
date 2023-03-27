import "./style.css"

const CarouselImage = (content, id='0')=>{

    return/* html */ `
        <figure class="carousel-image" id=${id}>
            <img class="carousel-image__img" src="src/assets/${content}.jpg" alt="">
        </figure>
    `
}

export default CarouselImage