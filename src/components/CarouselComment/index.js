import "./style.css"
import MainParagraph from "../MainParagraph"
import StarRating from "../StarRating"

const CarouselComment = (content, stars)=>{
    const contentUrl = new URL(`/src/assets/${content}`, import.meta.url).href
    return/* html */ `
        <article class="carousel-comment">
            <img src=${contentUrl} alt ="">
            <div class="carousel-comment__text">
                ${MainParagraph(' Minimalistic vintage family house is a beautiful and charming property combines simplicity and elegance of minimalism with the character and warmth of vintage style.')}
                <div class="carousel-comment__stars">
                    ${StarRating(stars)}
                </div>
            </div>
            <div class="carousel-commnet__aspas">
                <img src="/src/assets/aspas.svg" alt="">
            </div>
        </article>
    `
}

export default CarouselComment