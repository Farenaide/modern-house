import "./src/styles/settings/fonts.css"
import "./src/styles/settings/colors.css"
import "./src/styles/elements/base.css"
import "./src/styles/generic/reset.css"



import MainHeader from "./src/components/MainHeader";
import MainScreen from "./src/objects/MainScreen";
import CarouselWrapper from "./src/objects/CarouselWrapper";
import DescriptionWrapper from "./src/objects/DescriptionWrapper";
import DescriptionWrapper2 from "./src/objects/DescriptionWrapper2";
import CarouselComment from "./src/components/CarouselComment";
import GoldenStars from "./src/components/StarRating";

const $root = document.querySelector('#root');


$root.insertAdjacentHTML('beforeend',
  `
  ${MainHeader()}
  ${MainScreen()}
  ${CarouselWrapper()}
  ${DescriptionWrapper()}
  ${DescriptionWrapper2()}
  ${CarouselComment('user1.png','4')}
  `
)

