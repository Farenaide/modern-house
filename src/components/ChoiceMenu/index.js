import ChoiceRadio from "../ChoiceRadio"
import SecondTitle from "../SecondTitle"
import "./style.css"

window.selecao = {}
window.selecao.selectedRadio = ()=>{
    const selectedRadio = document.querySelectorAll('.choice-radio__input[type="radio"]:checked')
    console.log(selectedRadio)
} 

const ChoiceMenu = ()=>{
    return/* html */ `
        <form class="choice-menu" onchange="window.selecao.selectedRadio()">
            <fieldset>
                <legend>
                    ${SecondTitle('explore apartment types')}
                </legend>
                <div class="choice-menu__options">
                    ${ChoiceRadio('houses', 'houses', 'checked')}
                    ${ChoiceRadio('office', 'office')}
                    ${ChoiceRadio('apartments', 'apartments')}
                    ${ChoiceRadio('villa', 'villa')}
                    ${ChoiceRadio('townhome', 'townhome')}
                </div>
            </fieldset>
        </form>
    `
}

export default ChoiceMenu