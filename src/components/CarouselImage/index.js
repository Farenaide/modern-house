import "./style.css"

const CarouselImage = (content, id='0')=>{
    const contentUrl = new URL(`/src/assets/${content}`, import.meta.url).href

    return/* html */ `
        <figure class="carousel-image" id=${id}>
            <img class="carousel-image__img" src=${contentUrl} alt="">
        </figure>
    `
}

export default CarouselImage