import React from "react";
import ListOfCards from "../ListOfCards";

const cardspopulargames = [
  {
    cardImage:
      "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/valtall_1200x1600-300d8e4cb9bee9dbb1166b574b3bdc93?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "VALORANT",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "Gratis",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/offer/a2dcbb9e34204bda9da8415f97b3f4ea/v1_1200x1600-fc41913532d45172cbc5fdd866eabf58?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "Honkai: Star Rail",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "Gratis",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/offer/2c42520d342a46d7a6e0cfa77b4715de/StoreVertical1200x16001_1200x1600-c3984f399a98d62bc56770577508b890?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "Dying Light Enhanced Edition",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "11,99 US$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S2_1200x1600-c806355d9cc8b35ebe392f2a7db03075?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "EA SPORTSTV FIFA 23 Standard Edition",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "66,90 US$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "Red Dead Redemption 2",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "44,99 US$",
  },
];

const PopularGames = () => {
  return (
    <div>
      <ListOfCards titleOfList="Populares >" cardsv1={cardspopulargames} />
    </div>
  );
};

export default PopularGames;
