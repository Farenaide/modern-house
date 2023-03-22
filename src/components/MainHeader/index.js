import HeaderButtons from "../../objects/HeaderButtons"
import LogoRls from "../LogoRls"
import MainButton from "../MainButton"
import NavBar from "../NavBar"
import "./style.css"

const MainHeader = ()=>{
    return/* html */`
        <header class="main-header">
            ${LogoRls()}
            ${NavBar()}
            ${HeaderButtons()}
        </header>
    `
}

export default MainHeader