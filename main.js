import "./src/styles/settings/fonts.css"
import "./src/styles/settings/colors.css"
import "./src/styles/elements/base.css"
import "./src/styles/generic/reset.css"



import MainHeader from "./src/components/MainHeader";
import MainScreen from "./src/objects/MainScreen";
import CarouselWrapper from "./src/objects/CarouselWrapper";

const $root = document.querySelector('#root');


$root.insertAdjacentHTML('beforeend',
  `
  ${MainHeader()}
  ${MainScreen()}
  ${CarouselWrapper()}
  `
)

