import "./style.css"

const ChoiceRadio = (content = 'Choice Radio', attr = 'choiceRadio', checked = '')=>{    
    return/* html */ `
        <div class="choice-radio">
            <input class="choice-radio__input" 
            type="radio"
            id="${attr}"
            value="${attr}"
            name="choices" ${checked}>

            <label class="choice-radio__label"
            for="${attr}">
                ${content}
            </label>
        </div>
    `
}

export default ChoiceRadio