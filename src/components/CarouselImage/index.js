import "./style.css"

const CarouselImage = (content, alt)=>{
    const contentUrl = new URL(`/src/assets/${content}`, import.meta.url).href

    return/* html */ `
        <figure class="carousel-image">
            <img class="carousel-image__img" src=${contentUrl} alt="${alt}">
        </figure>
    `
}

export default CarouselImage