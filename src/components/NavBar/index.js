import HeaderButtons from "../../objects/HeaderButtons"
import "./style.css"

const NavBar = ()=>{
    return /* html */`
    <nav class="nav-bar">     
        <div class="nav-bar__wrapper">
            <input type="checkbox" id="nav-bar__menu" class="nav-bar__menu" name="nav-bar__menu" onclick="window.menu.openMenu(event)">
            <ul class="nav-bar__list">
                <li><a class="nav-bar__link" href="#">HOME</a></li>
                <li><a class="nav-bar__link" href="#">ABOUT US</a></li>
                <li><a class="nav-bar__link" href="#">SERVICE</a></li>
                <li><a class="nav-bar__link" href="#">CONTACT US</a></li>
            </ul>
        </div>
        <div class="nav-bar__buttons">
            ${HeaderButtons()}
        </div>
    </nav>
    `
}
window.menu=[]
window.menu.openMenu = (event)=>{
    const $menuCheckbox = event.target
    const $menuItens = document.querySelector('.nav-bar__list')
    if($menuCheckbox.checked){
        $menuItens.style.display="flex"
    } else{
        $menuItens.style.display="none"
    }

}

export default NavBar
