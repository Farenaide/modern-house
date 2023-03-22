import "./style.css"

const MainButton = (content, type)=>{
    return /* html */ `
        <button class="main-button ${type}">${content}</button>
    `
}

export default MainButton