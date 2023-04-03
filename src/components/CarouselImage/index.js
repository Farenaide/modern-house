import "./style.css"

const CarouselImage = (content)=>{
    const contentUrl = new URL(`/src/assets/${content}`, import.meta.url).href

    return/* html */ `
        <figure class="carousel-image">
            <img class="carousel-image__img" src=${contentUrl} alt="">
        </figure>
    `
}

export default CarouselImage