import MainButton from "../../components/MainButton"
import MainTitle from "../../components/MainTitle"
import "./style.css"

const MainScreen = ()=>{
    return /* html */ `
        <div class="main-screen">
            <div class="main-screen__left">
                ${MainTitle('the modern house')}
                ${MainButton('REQUEST A CALL')}
            </div>
        </div>
    `
}

export default MainScreen