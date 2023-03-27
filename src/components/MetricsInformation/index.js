import "./style.css"

const MetricsInformation = (numberContent, content = '')=>{
    return/* html */ `
        <div class="metrics-information">
            <span class="metrics-information__number">${numberContent}</span>
            <span class="metrics-information__content">${content}</span>
        </div>
    `
}

export default MetricsInformation