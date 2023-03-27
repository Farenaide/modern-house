import ArchedImage from "../../components/ArchedImage"
import CircleWaves from "../../components/CircleWaves"
import MainButton from "../../components/MainButton"
import MainParagraph from "../../components/MainParagraph"
import MetricsInformation from "../../components/MetricsInformation"
import SecondTitle from "../../components/SecondTitle"
import "./style.css"

const DescriptionWrapper = ()=>{
    return/* html */ `
        <dl class="description-wrapper">
            <dt>
                ${SecondTitle('minimalist vintage family house')}
            </dt>

            <dd>
                ${MainParagraph('Minimalistic vintage family house is a beautiful and charming property combines simplicity and elegance of minimalism with the character and warmth of vintage style.')}
            </dd>
            <div class="description-wrapper__price">
                <dd>
                ${MetricsInformation('$650')}
                </dd>
                ${MainButton('buy now','main-button--large')}
            </div>
            <dd>
            ${ArchedImage('Rectangle 216')}
            </dd>
            <div class="description-wrapper__waves">${CircleWaves()}</div>
        </dl>
    `
}

export default DescriptionWrapper