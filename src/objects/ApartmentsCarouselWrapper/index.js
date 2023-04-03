import CarouselIndicators from "../../components/CarouselIndicators"
import MainCarousel from "../MainCarousel"
import "./style.css"

const ApartmentsCarouselWrapper = ()=>{
    return/* html */ `
        <div class="carousel-wrapper">
            ${MainCarousel()}
            ${CarouselIndicators('window.apartmentsCarousel.voltar(event)', 'window.apartmentsCarousel.avancar(event)')}
        </div>
    `
}

window.apartmentsCarousel={}

const allImages = ()=>{
    const $mainCarousel = document.querySelector('.main-carousel') 
    const $allImages = [...$mainCarousel.children]
    $allImages.shift()
    return $allImages
}

const menuMargin = ()=>{
    const $allImages = allImages()
    $allImages.map((element, index)=>{
        if(index == 1){
            element.classList.add('--margin')          
        } else {
            element.classList.remove('--margin')  
        }
    })
}

const fadeIn = (element)=>{
    const animationTime = 800
    element.style.setProperty('transition-duration', `0ms`)
    element.style.opacity = 0;
    setTimeout(() => {
        element.style.setProperty('transition-duration', `${animationTime}ms`)
        element.style.opacity = 1;
    }, 0);
}

window.apartmentsCarousel.avancar = (event)=>{
    window.indicators.radios('right', event)
    const $allImages = allImages()
    const $firstElement = $allImages[0]
    const $lastElement = $allImages[$allImages.length - 1]
    $firstElement.insertAdjacentElement('beforebegin', $lastElement)  
    menuMargin()
    fadeIn($firstElement)             
}

window.apartmentsCarousel.voltar = (event)=>{
    window.indicators.radios('left', event)
    const $allImages = allImages()
    const $firstElement = $allImages[0]
    const $lastElement = $allImages[$allImages.length - 1]
    $lastElement.insertAdjacentElement('afterend', $firstElement)  
    menuMargin()   
    fadeIn($lastElement.previousElementSibling)
} 

export default ApartmentsCarouselWrapper