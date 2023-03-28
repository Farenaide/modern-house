import ArchedImage from "../../components/ArchedImage"
import CircleWaves from "../../components/CircleWaves"
import ExclusiveAgents from "../../components/ExclusiveAgents"
import MainButton from "../../components/MainButton"
import MainParagraph from "../../components/MainParagraph"
import MetricsInformation from "../../components/MetricsInformation"
import SecondTitle from "../../components/SecondTitle"
import StarReviews from "../../components/StarReviews"
import "./style.css"

const DescriptionWrapper2 = ()=>{
    return/* html */ `
        <dl class="description-wrapper2">
            <dt class="description-wrapper2__title">
                ${SecondTitle('create of investment opportunities')}
            </dt>

            <div class="description-wrapper2__waves">
                ${CircleWaves()}
            </div>  
            
            <div class="description-wrapper2__information">
                <dd>
                    ${MetricsInformation('$32m+','capital raised')}
                </dd>
                <dd>
                    ${MetricsInformation('1800+','develop for client')}
                </dd>
                <div class="description-wrapper2__button">
                    ${MainButton('request a call','main-button--large')}
                </div>     
            </div>
             
            
            <dd class="description-wrapper2__image">
                ${ArchedImage('Rectangle 214.png')}
            </dd>
                      
        </dl>
    `
}

export default DescriptionWrapper2