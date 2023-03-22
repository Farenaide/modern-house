import LogoRls from "../LogoRls"
import NavBar from "../NavBar"
import "./style.css"

const MainHeader = ()=>{
    return/* html */`
        <header class="main-header">
            ${LogoRls()}
            ${NavBar()} 
        </header>
    `
}

export default MainHeader