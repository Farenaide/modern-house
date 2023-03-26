import "./style.css"

const CarouselIndicators = (previous, next, indicatorEvent)=>{
    return/* html */ `
        <div class="carousel-indicators">
            <button class="carousel-indicators__button--left" id="previous" type="reset" onclick=${previous}><span>Previous</span></button>
            <input class="carousel-indicators__input" id="item1" name="indicators" checked type="radio" onclick="${indicatorEvent}">
            <input class="carousel-indicators__input" id="item2" name="indicators" type="radio" onclick="${indicatorEvent}">
            <input class="carousel-indicators__input" id="item3" name="indicators" type="radio" onclick="${indicatorEvent}">
            <input class="carousel-indicators__input" id="item4" name="indicators" type="radio" onclick="${indicatorEvent}">
            <button class="carousel-indicators__button--right" id="next" type="reset" onclick=${next}><span>Next</span></button>
        </div>
    `
}


export default CarouselIndicators