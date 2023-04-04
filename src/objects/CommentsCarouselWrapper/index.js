import "./style.css"
import CarouselComment from "../../components/CarouselComment"
import CarouselIndicators from "../../components/CarouselIndicators"
import SecondTitle from "../../components/SecondTitle"

const CommentsCarouselWrapper = ()=>{
    return/* html */ `
         
        <div class="comments-wrapper">
            <div class="comments-wrapper_wrapper">
                <div class="comments-wrapper__top">
                    ${SecondTitle('our beloved clients says')}
                    ${CarouselIndicators('window.commentCarousel.voltar(event)', 'window.commentCarousel.avancar(event)')}
                </div>
                <div class="comments-wrapper__itens">
                    <div class="comments-wrapper__comment">
                        ${CarouselComment('user1.png','4')}
                    </div>
                    <div class="comments-wrapper__comment">
                        ${CarouselComment('user2.png','3')}
                    </div>
                    <div class="comments-wrapper__comment">
                        ${CarouselComment('user3.png','5')}
                    </div>
                    <div class="comments-wrapper__comment">
                        ${CarouselComment('user4.png','4')}
                    </div>
                </div>
            </div>
        </div>
    `
}

window.commentCarousel={}

const timeAnimation = 900

const disableButtons = (event)=>{
    const $eventClick = event.target
    console.log([...$eventClick.parentNode.children]);
    const $indicatorButtons = [[...$eventClick.parentNode.children][0], [...$eventClick.parentNode.children][[...$eventClick.parentNode.children].length - 1]]

    $indicatorButtons.map(element => {
        element.disabled = true;
    }); 
        
    setTimeout(() => {
       $indicatorButtons.map(element => {
            element.disabled = false
        })
    }, timeAnimation); 
}

const carouselAnimation = (direction)=>{    
    const $carouselComments = document.querySelector('.comments-wrapper__itens')
    const $firstComment = $carouselComments.firstElementChild
    const $lastComment = $carouselComments.lastElementChild 
    const $firstCommentWidth = $carouselComments.firstElementChild.getBoundingClientRect().width
    const $firstCommentMarginRight = parseInt(getComputedStyle($carouselComments.firstElementChild).marginRight)
    const comentarioWidth = $firstCommentMarginRight + $firstCommentWidth

    $carouselComments.style.setProperty('transition-duration', `${timeAnimation}ms`)
    if(direction == 'right'){
        $lastComment.insertAdjacentElement('afterend', $firstComment.cloneNode(true))
        $carouselComments.style.setProperty('transform', `translateX(-${comentarioWidth}px)`)
        setTimeout(() => {
            $firstComment.remove()
            $carouselComments.style.setProperty('transition-duration', `0s`)
            $carouselComments.style.setProperty('transform', `translateX(0px)`)
        }, timeAnimation); 

    } else if(direction == 'left'){
        $carouselComments.style.setProperty('transform', `translateX(+${comentarioWidth}px)`) 
        
        setTimeout(() => {
            $carouselComments.style.setProperty('transition-duration', `0s`)
            $firstComment.insertAdjacentElement('beforebegin', $lastComment)
            $carouselComments.style.setProperty('transform', `translateX(0px)`)
        }, timeAnimation);
    }
}

window.commentCarousel.avancar = (event)=>{          
    window.indicators.radios('right', event)
    carouselAnimation('right')

    disableButtons(event)
}

window.commentCarousel.voltar = (event)=>{    
    window.indicators.radios('left', event) 
    carouselAnimation('left')

    disableButtons(event)
        
} 


export default CommentsCarouselWrapper