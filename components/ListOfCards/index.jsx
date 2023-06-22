import React from "react";
import CardV1 from "../CardV1";

const cardV1Info = [
  {
    cardImage:
      "https://cdn1.epicgames.com/offer/84f45b7676af47d9adecd3b636466f89/EGST_StorePortrait_1200x1600_1200x1600-adc3de9f03faba15cc9ef7e5762ad96d?h=480&quality=medium&resize=1&w=360",
    cardDesc: "Juego Base",
    cardTitle: "The Settlers®: New Allies",
    cardOffer: "25%",
    cardPriceBefore: "59,99 US$",
    cardPriceAfter: "44,99 US$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/offer/fe752703dd2042008ff874fc8642fba3/EGS_GrandTheftAutoTheTrilogyTheDefinitiveEdition_RockstarGames_S2_1200x1600-7a39d7c91aed7cf7c5fafdca4dbb9d1c?h=480&quality=medium&resize=1&w=360",
    cardDesc: "LOTE",
    cardTitle: "Grand Theft Auto: The Trilogy The Definitive Edition",
    cardOffer: "-50 %",
    cardPriceBefore: "44,99 US$",
    cardPriceAfter: "22,49 US$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/offer/4ec958d5e4b6429aadbc116cee0b6ea0/EGS_DeadSpace_MotiveStudio_S2_1200x1600-551c16d068cab45b02149e15a43c2413?h=480&quality=medium&resize=1&w=360",
    cardDesc: "juego base",
    cardTitle: "Dead Space",
    cardOffer: "-20 %",
    cardPriceBefore: "59,99 US$",
    cardPriceAfter: "47,99 US$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2Lightfall_Bungie_AddOn_S2_1200x1600-3a820ab4d96977371ca4e152059efa8c?h=480&quality=medium&resize=1&w=360",
    cardDesc: "Complemento",
    cardTitle: "Destiny 2: Lightfall",
    cardOffer: "-33 %",
    cardPriceBefore: "29,99 US$",
    cardPriceAfter: "20,09 US$",
  },
  {
    cardImage:
      "https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S2_1200x1600-c806355d9cc8b35ebe392f2a7db03075?h=480&quality=medium&resize=1&w=360",
    cardDesc: "Juego Base",
    cardTitle: "SPORTSN FIFA 23 Standard Edition",
    cardOffer: "-70 %",
    cardPriceBefore: "66,90 US$",
    cardPriceAfter: "20,07 US$",
  },
];

const ListOfCards = ({
  cardsv1 = cardV1Info,
  titleOfList = "Destacados de las ofertas de primavera >",
}) => {
  return (
    <div className="list-of-cards-section">
      <div className="list-of-cards-title">
        <h2>{titleOfList}</h2>
      </div>

      <div className="list-of-cards">
        {" "}
        {cardsv1.map((card, index) => (
          <CardV1 key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ListOfCards;
