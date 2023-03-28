import "./style.css"

const CircleWaves = ()=>{
    const contentUrl = new URL(`/src/assets/waves.png`, import.meta.url).href
    return /* html */ `
        <figure class="circle-waves">
            <img src=${contentUrl} alt="">
        </figure>
    `
}

export default CircleWaves