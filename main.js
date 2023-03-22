import "./src/styles/settings/fonts.css"
import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"



import MainHeader from "./src/components/MainHeader";

const $root = document.querySelector('#root');


$root.insertAdjacentHTML('beforeend',
  `
  ${MainHeader()}
  `
)