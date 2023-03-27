import CarouselIndicators from "../../components/CarouselIndicators"
import MainCarousel from "../MainCarousel"
import "./style.css"

const CarouselWrapper = ()=>{
    return/* html */ `
        <div class="carousel-wrapper">
            ${MainCarousel()}
            ${CarouselIndicators('window.indicators.checkedImage(event)')}
        </div>
    `
}

window.indicators = {}
let tempAllImages = []
let $allImages = []

const takeImagesPosition = () => {
    if ($allImages.length == 0) {
        $allImages = [...document.querySelectorAll('.main-carousel > .carousel-image')]
        tempAllImages = [...$allImages]
    }
}

const fadeIn = (element) => {
    element.style.opacity = 0;
    setTimeout(() => {
        element.style.opacity = 1;
    }, 0); 
}

const initialPosition = () => { 
    takeImagesPosition()   
    const $lastImage = $allImages[$allImages.length - 1]
    const $choiceMenu = document.querySelector('.choice-menu')
    tempAllImages = [...$allImages]
    tempAllImages.splice(2, 0, $choiceMenu)
    tempAllImages.map(image => $lastImage.insertAdjacentElement('beforebegin', image))
}

const organizeImages = (counter, reset = 'y', direction = 'next') => {
    takeImagesPosition()
    if(reset == 'y'){
        initialPosition()
    }  
    const $choiceMenu = document.querySelector('.choice-menu')     
    if (counter > 0){
        tempAllImages.indexOf($choiceMenu) != -1 ? tempAllImages.splice(tempAllImages.indexOf($choiceMenu), 1) : console.log('') // Se tiver um elemento menu, o remove
        if(direction == 'next'){ 
            for(let c = 1; c < counter; c++){            
                const lastIndex = tempAllImages[tempAllImages.length - 1]
                tempAllImages.unshift(lastIndex)
                tempAllImages.pop()         
            }
        } else {
            const firstIndex = tempAllImages[0]
            tempAllImages.push(firstIndex)
            tempAllImages.shift()
        }
        tempAllImages.splice(2, 0, $choiceMenu) // adiciona um elemento menu
        tempAllImages.map(element => tempAllImages[tempAllImages.length - 1].insertAdjacentElement('beforebegin', element))
        fadeIn($choiceMenu.previousElementSibling)
    }
}

window.indicators.checkedImage = (event)=>{
    const $allIndicators = [...document.querySelectorAll('.carousel-indicators__input')]
    const $indicatorChecked = document.querySelector('.carousel-indicators__input[type="radio"]:checked')

    switch (event.target.id) {
        case 'item1':
            organizeImages(1)            
            break;
        case 'item2':
            organizeImages(2)
            break;
        case 'item3':
            organizeImages(3)
            break;
        case 'item4':
            organizeImages(4)
            break;
        case 'next':
            organizeImages(2,"n","next")
            
            if($indicatorChecked.id == 'item4'){
                $allIndicators[0].checked = true
            } else{
                $indicatorChecked.nextElementSibling.checked= true
            }
            break
        case 'previous':
            organizeImages(2,"n","previous")

            if($indicatorChecked.id == 'item1'){
                $allIndicators[$allIndicators.length -1].checked = true
            } else{
                $indicatorChecked.previousElementSibling.checked= true
            }
            break
        default:
            break;
    }
    
}

export default CarouselWrapper