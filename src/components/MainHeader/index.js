import LogoRls from "../LogoRls"
import NavBar from "../NavBar"
import "./style.css"

const MainHeader = ()=>{
    return/* html */`
        <header class="main-header">
            <div class="main-header__logo">
                ${LogoRls()}
            </div>
            <div class="main-header__nav">
                ${NavBar()} 
            </div>
        </header>
    `
}

export default MainHeader