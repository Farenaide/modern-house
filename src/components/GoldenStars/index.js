import "./style.css"

const GoldenStars = (value = '3')=>{
    return/* html */ `
        <div class="golden-stars mask">
            <progress class="golden-stars__progress" max='5' value=${value}>${value} estrelas</progress>
        </div>
    `
}

export default GoldenStars