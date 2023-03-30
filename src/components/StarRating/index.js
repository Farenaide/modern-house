import "./style.css"

window.starRating=[]

const StarRating = (setStarNumber = '1',allowed = 'true')=>{
    const nameUrl = 
    `<svg width="32" height="20" viewBox="6 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#FD9904"/>
    </svg>`
    
    let liStar = ''
    let starRatingEvent = ''
    let starRatingClass = ''
    if(allowed == 'true'){ // set animation hover to stars
        starRatingEvent = 'starRating.selectStar(event)'
        starRatingClass = 'star-rating__star'
    } else{
        starRatingEvent = ''
        starRatingClass = 'star-rating__star--disabled'
    }
    
    window.starRating.createStars = (setStarNumbers)=>{

        for(let c = 5; c >= 1; c--){
            if(c == setStarNumbers){
                liStar = /* html */ ` 
                <li class="${starRatingClass} selected">${nameUrl}</li> 
                `
                + liStar
            } else {
                liStar = /* html */ ` 
                <li class="${starRatingClass}">${nameUrl}</li> 
                `
                + liStar
            }
        }
        return liStar
    }
  
    return/* html */ `
    <ul class="star-rating" onclick="${starRatingEvent}">        
        ${window.starRating.createStars(`${setStarNumber}`)}
    </ul>
    `
}


window.starRating.selectStar = (event)=>{    
    const $elementClicked = event.target
    const $closestElement = $elementClicked.closest('.star-rating__star')
    const $allStars = [...$closestElement.parentNode.children]
    $allStars.map((star)=>{
        if(star.classList.contains('selected')){
            star.classList.remove('selected')
        } 
    })
    $closestElement.classList.add('selected')
}

export default StarRating