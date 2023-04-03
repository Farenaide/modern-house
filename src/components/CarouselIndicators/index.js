import "./style.css"

const CarouselIndicators = (eventPrevious, eventNext)=>{
    return/* html */ `
        <div class="carousel-indicators">
            <button class="carousel-indicators__button--left" id="previous" type="reset" onclick=${eventPrevious}><span>Previous</span></button>
            <input class="carousel-indicators__input" id="item1" name="indicators" checked type="radio" disabled>
            <input class="carousel-indicators__input" id="item2" name="indicators" type="radio" disabled>
            <input class="carousel-indicators__input" id="item3" name="indicators" type="radio" disabled>
            <input class="carousel-indicators__input" id="item4" name="indicators" type="radio" disabled>
            <button class="carousel-indicators__button--right" id="next" type="reset" onclick=${eventNext}><span>Next</span></button>
        </div>
    `
}
window.indicators={}
window.indicators.radios = (direction, event)=>{           
    const $allRadios = [...event.target.parentNode.children]
    $allRadios.shift()
    $allRadios.pop()
    const $selected = $allRadios.filter(element=> {return element.checked} )
        if(direction == 'right'){
        $selected[0].nextElementSibling.checked=true
        if($selected[0] == $allRadios[$allRadios.length - 1]){
            $allRadios[0].checked=true
        }
    } else {
        $selected[0].previousElementSibling.checked=true
        if($selected[0] == $allRadios[0]){
            $allRadios[$allRadios.length - 1].checked=true
        }
    } 
}

export default CarouselIndicators