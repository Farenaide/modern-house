import CarouselIndicators from "../../components/CarouselIndicators"
import MainCarousel from "../MainCarousel"
import "./style.css"

const CarouselWrapper = ()=>{
    return/* html */ `
        <div class="carousel-wrapper">
            ${MainCarousel()}
            ${CarouselIndicators('onclick=window.nav.previousImage()','onclick=window.nav.nextImage()')}
        </div>
    `
}

window.nav = {}

function fadeIn(element){
    element.style.opacity = 0;
    setTimeout(() => {
        element.style.opacity = 1;
    }, 100); 
}

window.nav.nextImage = ()=>{
    const $menu = document.querySelector('.choice-menu')
    const $nextElement = $menu.nextElementSibling
    const $firstElement = $menu.parentElement.firstElementChild
    const $lastElement = $menu.parentElement.lastElementChild
    $menu.insertAdjacentElement('beforebegin', $nextElement)
    $lastElement.insertAdjacentElement('afterend', $firstElement)
    fadeIn($menu.previousElementSibling)
}

window.nav.previousImage = ()=>{
    const $menu = document.querySelector('.choice-menu')
    const $firstElement = $menu.parentElement.firstElementChild
    const $secondElement = $menu.previousElementSibling
    const $lastElement = $menu.parentElement.lastElementChild
    $menu.insertAdjacentElement('afterend', $secondElement)
    $firstElement.insertAdjacentElement('beforebegin', $lastElement)
    $menu.insertAdjacentElement('beforebegin', $menu.previousElementSibling)
    fadeIn($menu.previousElementSibling)
}

export default CarouselWrapper