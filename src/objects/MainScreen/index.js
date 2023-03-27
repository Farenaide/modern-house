import ArchedImage from "../../components/ArchedImage"
import CircleWaves from "../../components/CircleWaves/index.js"
import MainButton from "../../components/MainButton"
import MainTitle from "../../components/MainTitle"
import WelcomeCircle from "../../components/WelcomeCircle"
import "./style.css"

const MainScreen = ()=>{
    return /* html */ `
        <div class="main-screen">
            <div class="main-screen__left">
                ${MainTitle('the modern house')}
                ${MainButton('REQUEST A CALL','main-button--large')}
            </div>
            ${CircleWaves()}
            ${WelcomeCircle('welcome to')}
            ${ArchedImage('Rectangle 207')}
        </div>
        
    `
}

export default MainScreen