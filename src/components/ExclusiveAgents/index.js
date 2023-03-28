import "./style.css"

const ExclusiveAgents = (content)=>{

    const agentsArr = ['Agent1','Agent2','Agent3','Agent4']
    let agentString = ''
    agentsArr.map((agent)=>{
        agentString = `<img src="src/assets/${agent}.png" alt="${agent} picture">` + agentString
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