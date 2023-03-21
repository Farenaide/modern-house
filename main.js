import "./src/styles/settings/fonts.css"
import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"


import NavBar from "./src/components/NavBar";

const $root = document.querySelector('#root');


$root.insertAdjacentHTML('beforeend',
  `
  ${NavBar()}
  `
)