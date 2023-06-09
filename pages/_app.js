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
import "@/components/ListOfCardsV2/listofcards2.css";

import "@/components/CardV3/cardv3.css";
import "@/components/ListOfCardsV3/listofcards3.css";

import "@/components/CardV4/cardv4.css";
import "@/components/ListOfCardsV4/listofcards4.css";

// Games Free Section

import "@/components/GamesFreeSection/gamesfree.css";
import "@/components/CardFreeGame/cardfree.css";
import "@/components/ListOfCardsFree/listofcardsfree.css";

// Columns of Cards
import "@/components/ListOfColumns/listofcolumns.css";
import "@/components/ListOfCardsColumns/listofcardscolumns.css";
import "@/components/CardVColumn/cardvcolumn.css";

//Popular Games
import "@/components/PopularGames/populargames.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
