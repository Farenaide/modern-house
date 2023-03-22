import HeaderButtons from "../../objects/HeaderButtons"
import MainButton from "../MainButton"
import NavBar from "../NavBar"
import "./style.css"

const MainHeader = ()=>{
    return/* html */`
        <header class="main-header">
            ${NavBar()}
            ${HeaderButtons()}
        </header>
    `
}

export default MainHeader