import "./style.css"

const GoldenStars = (value = '5')=>{
    return/* html */ `
        <div class="golden-stars">
            <progress class="golden-stars__progress" max='5' value=${value}>${value} estrelas</progress>
        </div>
    `
}

export default GoldenStars