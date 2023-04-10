import CarouselImage from "../../components/CarouselImage"
import ChoiceMenu from "../../components/ChoiceMenu"
import "./style.css"

const MainCarousel = ()=>{
    window.selecao = {}    
    window.selecao.selectedRadio = ()=>{
        const housesArr = ['house1','house2','house3','house4']
        const officeArr =['office1','office2','office3','office4']
        const apartmentsArr = ['apartment1','apartment2','apartment3','apartment4']
        const villaArr = ['villa1','villa2','villa3','villa4']
        const townArr = ['town1','town2','town3','town4']
        const choiceArr = ['houses','office','apartments','villa','townhome']
        const $selectedRadio = document.querySelector('.choice-radio__input[type="radio"]:checked')
        console.log($selectedRadio.id);

        const $myImages = [...document.querySelectorAll('.carousel-image__img')]
        let atualArr = ''    

        switch ($selectedRadio.id) {
          
            case choiceArr[0]:
                atualArr =[...housesArr]
                break;
            case choiceArr[1]:
                atualArr =[...officeArr]
                break;
            case choiceArr[2]:
                atualArr =[...apartmentsArr]
                break;
            case choiceArr[3]:
                atualArr =[...villaArr]
                break;
            case choiceArr[4]:
                atualArr =[...townArr]
                break;
            case choiceArr[5]:
                
                break;
        
            default:
                break;
        }
        $myImages.map((element, index)=>{
            const newSrc = element.src.substring(0, element.src.lastIndexOf('/')+1)
            element.src = `${newSrc}${atualArr[index]}.jpg`
        })
    } 
    
    
    return/* html */ `
        <div class="main-carousel">
            <div class="main-carousel__menu">
                ${ChoiceMenu()}
            </div>
            <div class="main-carousel__image">
                ${CarouselImage(`house1.jpg`,'Interior apartment 1')}
            </div>
            <div class="main-carousel__image --margin">
                ${CarouselImage(`house2.jpg`,'Interior apartment 2')}
            </div>
            <div class="main-carousel__image">
                ${CarouselImage(`house3.jpg`, 'Interior apartment 3')}
            </div>
            <div class="main-carousel__image">
                ${CarouselImage(`house4.jpg`, 'Interior apartment 4')}
            </div>
        </div>
    `
}
export default MainCarousel