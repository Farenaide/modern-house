import GoldenStars from "../GoldenStars"
import "./style.css"

const StarReviews = (value = 5, content)=>{
    return/* html */ `
        <article class="star-reviews">
            ${GoldenStars()}
            <span class="star-reviews__span">${content}</span>
        </article>
    `
}

export default StarReviews