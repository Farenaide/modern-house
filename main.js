import "./src/styles/settings/fonts.css"
import "./src/styles/settings/colors.css"
import "./src/styles/elements/base.css"
import "./src/styles/generic/reset.css"



import MainHeader from "./src/components/MainHeader";
import MainTitle from "./src/components/MainTitle";
import MainScreen from "./src/objects/MainScreen";

const $root = document.querySelector('#root');


$root.insertAdjacentHTML('beforeend',
  `
  ${MainHeader()}
  ${MainScreen()}
  `
)