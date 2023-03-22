import HeaderButtons from "../../objects/HeaderButtons"
import "./style.css"

const NavBar = ()=>{
    return /* html */`
    <nav class="nav-bar">
        <ul class="nav-bar__list">
            <li><a class="nav-bar__link" href="#">HOME</a></li>
            <li><a class="nav-bar__link" href="#">ABOUT US</a></li>
            <li><a class="nav-bar__link" href="#">SERVICE</a></li>
            <li><a class="nav-bar__link" href="#">CONTACT US</a></li>
        </ul>
        ${HeaderButtons()}
    </nav>
    `
}

export default NavBar