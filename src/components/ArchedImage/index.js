import "./style.css"

const ArchedImage = (name)=>{
    return /* html */`
        <figure class="arched-image">
            <img class="arched-image__img" src="src/assets/${name}.png" alt="Modern home interior">
        </figure>
    `
}

export default ArchedImage