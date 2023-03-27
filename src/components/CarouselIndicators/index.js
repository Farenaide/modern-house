import "./style.css"

const CarouselIndicators = (event)=>{
    return/* html */ `
        <div class="carousel-indicators">
            <button class="carousel-indicators__button--left" id="previous" type="reset" onclick=${event}><span>Previous</span></button>
            <input class="carousel-indicators__input" id="item1" name="indicators" checked type="radio" onclick="${event}">
            <input class="carousel-indicators__input" id="item2" name="indicators" type="radio" onclick="${event}">
            <input class="carousel-indicators__input" id="item3" name="indicators" type="radio" onclick="${event}">
            <input class="carousel-indicators__input" id="item4" name="indicators" type="radio" onclick="${event}">
            <button class="carousel-indicators__button--right" id="next" type="reset" onclick=${event}><span>Next</span></button>
        </div>
    `
}


export default CarouselIndicators