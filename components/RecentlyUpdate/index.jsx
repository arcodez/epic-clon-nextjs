import React from "react";
import ListOfCards from "../ListOfCards";

const cardsrecentlygames = [
  {
    cardImage:
      "https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S2_1200x1600-a1c30209e3b9fb63144daa9b5670f503?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "Dead by Daylight",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "7,99 US$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/offer/de554cff12704db4a900032bbd194d7e/EGS_EVEOnline_CCPGames_S2_1200x1600-b2d13b3b0fbb0d3a0f3263d29ba84870?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "EVE Online",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "Gratis",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "Cyberpunk 2077",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "52 us$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S2_1200x1600-ed71f5e6188d8c4c411947f4b1fc59bc?h=480&quality=medium&resize=1&w=360",
    cardDesc: "JUEGO BASE",
    cardTitle: "Battlefield 2042",
    cardOffer: "",
    cardPriceBefore: "",
    cardPriceAfter: "59,99 IJS$",
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
];

const RecentlyUpdate = () => {
  return (
    <div>
      <ListOfCards
        titleOfList="Actualizado recientemente"
        cardsv1={cardsrecentlygames}
      />
    </div>
  );
};

export default RecentlyUpdate;
