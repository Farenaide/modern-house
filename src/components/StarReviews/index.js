import StarRating from "../StarRating"
import "./style.css"

const StarReviews = (value = 5, content)=>{
    return/* html */ `
        <article class="star-reviews">
            ${StarRating('false', `${value}`)}
            <span class="star-reviews__span">${content}</span>
        </article>
    `
}

export default StarReviews