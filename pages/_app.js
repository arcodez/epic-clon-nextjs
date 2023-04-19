// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

import "@/styles/globals.css";
import "@/components/Layout/Navbar/navbar.css";
import "@/components/Layout/Navbar2/navbar2.css";

//import the css of HeaderSection
import "@/components/HeaderSection/header-section.css";

// Cards Css
import "@/components/CardV1/cardv1.css";
import "@/components/ListOfCards/listofcards.css";

import "@/components/CardV2/cardv2.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
