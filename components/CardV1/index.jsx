import React from "react";

const CardV1 = ({
  cardImage = "https://cdn1.epicgames.com/offer/84f45b7676af47d9adecd3b636466f89/EGST_StorePortrait_1200x1600_1200x1600-adc3de9f03faba15cc9ef7e5762ad96d?h=480&quality=medium&resize=1&w=360",
  cardDesc = "Juego Base",
  cardTitle = "The Settlers®: New Allies",
  cardOffer = "25%",
  cardPriceBefore = "59,99 US$",
  cardPriceAfter = "44,99 US$",
}) => {
  return (
    <div className="cardv1-container">
      <div className="cardv1-image">
        <img src={cardImage} alt="#" />
      </div>

      <p className="cardv1-desc">{cardDesc}</p>
      <div className="cardv1-title">{cardTitle}</div>

      <div className="cardv1-price-section">
        <div className="cardv1-offer">{cardOffer}</div>

        <div className="cardv1-prices">
          <div className="cardv1-price-before">{cardPriceBefore}</div>
          <div className="cardv1-price-after">{cardPriceAfter}</div>
        </div>
      </div>
    </div>
  );
};

export default CardV1;
