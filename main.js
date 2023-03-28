import "./src/styles/settings/fonts.css"
import "./src/styles/settings/colors.css"
import "./src/styles/elements/base.css"
import "./src/styles/generic/reset.css"



import MainHeader from "./src/components/MainHeader";
import MainScreen from "./src/objects/MainScreen";
import CarouselWrapper from "./src/objects/CarouselWrapper";
import SecondTitle from "./src/components/SecondTitle";
import MainParagraph from "./src/components/MainParagraph";
import DescriptionWrapper from "./src/objects/DescriptionWrapper";
import MetricsInformation from "./src/components/MetricsInformation";
import StarReviews from "./src/components/StarReviews";

const $root = document.querySelector('#root');


$root.insertAdjacentHTML('beforeend',
  `
  ${MainHeader()}
  ${MainScreen()}
  ${CarouselWrapper()}
  ${DescriptionWrapper()}
  ${StarReviews('4','120 reviews')}
  `
)

