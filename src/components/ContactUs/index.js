import "./style.css"
import SecondTitle from "../SecondTitle"
import MainButton from "../MainButton"
import CircleWaves from "../CircleWaves"

const ContactUs = ()=>{
    return/* html */ `
        <article class="contact-us">
            <div class="contact-us__title">
                ${SecondTitle('need help? talk to out expert')}
            </div>
            <div class="contact-us__button">  
                ${MainButton('contact us','main-button--large main-button--transparent')}
            </div>
            <div class="contact-us__waves">
                ${CircleWaves()}
            </div>  
        </article>
    `
}

export default ContactUs