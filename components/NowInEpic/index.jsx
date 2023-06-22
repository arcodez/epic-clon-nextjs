import React from "react";
import ListOfCards from "../ListOfCards";

const cardsnowepic = [
  {
    cardImage:
      "https://cdn1.epicgames.com/spt-assets/14eb3477a6084940b49de5aa73c60f98/mammoth-tfbxg.jpg?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "PAYDAY 2",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "3,99 us$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/spt-assets/ac7b0dbd78674f1898df0c6e969c2cf7/geojelly-s97ci.png?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "GeoJelly",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "1,99 IJS$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/spt-assets/7baccfc4db7e49e9a477f709ce30b1e4/starlight-x2-galactic-puzzles-1crag.png?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "Starlight X-2 Galactic Puzzles",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "2,79 us$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/spt-assets/451a12c0139f4057afdb5c9f546b29a3/scathe-x61rf.png?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "Scathe",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "9,99 US$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/spt-assets/f5ddb9c079e54fdaa8d9b2d702783ab2/rift-rangers-1h0cc.png?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "Rift Rangers",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "1,99 us$",
  },
];

const NowInEpic = () => {
  return (
    <div>
      <ListOfCards
        titleOfList="Ahora en la Epic Games Store"
        cardsv1={cardsnowepic}
      />
    </div>
  );
};

export default NowInEpic;
