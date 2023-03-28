import "./style.css"

const StarReviews = (value = 5, content)=>{
    return/* html */ `
        <article class="star-reviews">
            <progress class="star-reviews__progress" max='5' value='${value}'>${value} estrelas</progress>
            <span class="star-reviews__span">${content}</span>
        </article>
    `
}

export default StarReviews