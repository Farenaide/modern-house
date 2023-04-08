import "./style.css"

const ArchedImage = (name, alt)=>{
    const nameUrl = new URL(`/src/assets/${name}`, import.meta.url).href
    return /* html */`
        <figure class="arched-image">
            <img class="arched-image__img" src=${nameUrl} alt=${alt}>
        </figure>
    `
}

export default ArchedImage