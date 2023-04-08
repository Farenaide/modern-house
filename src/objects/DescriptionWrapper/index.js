import ArchedImage from "../../components/ArchedImage"
import CircleWaves from "../../components/CircleWaves"
import ExclusiveAgents from "../../components/ExclusiveAgents"
import MainButton from "../../components/MainButton"
import MainParagraph from "../../components/MainParagraph"
import MetricsInformation from "../../components/MetricsInformation"
import SecondTitle from "../../components/SecondTitle"
import StarReviews from "../../components/StarReviews"
import "./style.css"

const DescriptionWrapper = ()=>{
    return/* html */ `
        <dl class="description-wrapper">
            <div class="description-wrapper__left">
                <dt class="description-wrapper__title">
                    ${SecondTitle('minimalist vintage family house')}
                </dt>
                <dd class="description-wrapper__paragraph">
                    ${MainParagraph('Minimalistic vintage family house is a beautiful and charming property combines simplicity and elegance of minimalism with the character and warmth of vintage style.')}
                </dd>
                <div class="description-wrapper__price">
                    <dd>
                    ${MetricsInformation('$650')}
                    </dd>
                    <div class="description-wrapper__button">
                        ${MainButton('buy now','main-button--large')}
                    </div>
                </div>
            </div>
            <dd class="description-wrapper__image">
                ${ArchedImage('Rectangle 216.png','Outside modern house')}
            </dd>
            <div class="description-wrapper__waves">${CircleWaves()}</div>
            <div class="description-wrapper__reviews">
                ${StarReviews('5','120 reviews')}
            </div>
            <div class="description-wrapper__agents">
                ${ExclusiveAgents('135+ exclusive agents')}
            </div>
        </dl>
    `
}

export default DescriptionWrapper