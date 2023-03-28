import "./style.css"

const ArchedImage = (name)=>{
    const nameUrl = new URL(`/src/assets/${name}`, import.meta.url).href
    return /* html */`
        <figure class="arched-image">
            <img class="arched-image__img" src=${nameUrl} alt="Modern home interior">
        </figure>
    `
}

export default ArchedImage