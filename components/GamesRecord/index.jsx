import React from "react";
import ListOfCards from "../ListOfCards";

const cardsgamesrecord = [
  {
    cardImage:
      "https://cdn1.epicgames.com/spt-assets/958ca219a3be440eb3c3225193b3d5be/candle-knight-ngidu.png?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "Candle Knight",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "5,99 us$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/spt-assets/3f8cb4f4b13f494c9696c15652271292/the-bookwalker-1d1yx.png?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "The Bookwalker: Thief of Tales",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "5,39 us$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/spt-assets/087738d5c5e54afba36a522452409129/fly-corp-1o8uk.jpeg?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "Fly corp",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "3,35 us$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/spt-assets/74dd0d3730194c75b4adaee3071475c3/souls-of-chronos-hvsyv.png?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "Souls Of Chronos",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "5,99 us$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/spt-assets/5d52eab8ae8c4737a9a209c4f118687f/active-dbg-braves-rage-h0ufb.png?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "Active DBG Brave's Rage",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "7,19 us$",
  },
];

const GamesRecord = () => {
  return (
    <div>
      <ListOfCards
        titleOfList="Juegos con logros >"
        cardsv1={cardsgamesrecord}
      />
    </div>
  );
};

export default GamesRecord;
