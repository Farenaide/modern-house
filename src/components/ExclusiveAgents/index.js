import "./style.css"

const ExclusiveAgents = (content)=>{

    const agentsArr = ['Agent1.png','Agent2.png','Agent3.png','Agent4.png']
    let agentString = ''
    agentsArr.map((agent)=>{
        let agentUrl = new URL(`/src/assets/${agent}`, import.meta.url).href
        agentString = `<img src="${agentUrl}" alt="${agent} picture">` + agentString
    })

    return/* html */ `
        <article class="exclusive-agents">
            <span class="exclusive-agents__content">${content}</span>
            <figure class="exclusive-agents__figure">
                ${agentString}
            </figure>
        </article>
    `
}

export default ExclusiveAgents