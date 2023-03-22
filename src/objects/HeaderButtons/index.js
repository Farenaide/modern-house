import "./style.css"

import MainButton from "../../components/MainButton"

const HeaderButtons = ()=>{
    return/* html */`
        <div class="header-buttons">
            ${MainButton('Register', 'main-button--transparent')}
            ${MainButton('Login')}
        </div>
    `
}

export default HeaderButtons