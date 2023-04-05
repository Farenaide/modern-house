import "./src/styles/settings/fonts.css"
import "./src/styles/settings/colors.css"
import "./src/styles/elements/base.css"
import "./src/styles/generic/reset.css"



import MainHeader from "./src/components/MainHeader";
import MainScreen from "./src/objects/MainScreen";
import DescriptionWrapper from "./src/objects/DescriptionWrapper";
import DescriptionWrapper2 from "./src/objects/DescriptionWrapper2";
import ApartmentsCarouselWrapper from "./src/objects/ApartmentsCarouselWrapper";
import CommentsCarouselWrapper from "./src/objects/CommentsCarouselWrapper";
import ContactUs from "./src/components/ContactUs";
import MainFooter from "./src/objects/MainFooter";

const $root = document.querySelector('#root');


$root.insertAdjacentHTML('beforeend',
  `
  ${MainHeader()}
  ${MainScreen()}
  ${ApartmentsCarouselWrapper()}
  ${DescriptionWrapper()}
  ${DescriptionWrapper2()}
  ${CommentsCarouselWrapper()}
  ${ContactUs()}
  ${MainFooter()}
  `
)

