import React from "react";
import CardV3 from "../CardV3";

const cardsv3 = [
  {
    name: "Fornite",
    price: "Gratis",
    type: "Complemento",
    image:
      "https://cdn1.epicgames.com/offer/fn/24BR_S24_EGS_Launcher_Blade_2560x1440_2560x1440-437d0424d02f5fd286ab659ddade30db?h=480&quality=medium&resize=1&w=854",
  },
];

const ListOfCardsV3 = () => {
  return (
    <div className="list-of-cards-v3-section">
      <div className="list-of-cards-v3-title">
        <h2>Experiencias de fornite</h2>
      </div>
      <div className="list-of-cards-v3">
        {[1, 2, 3].map((card, index) => (
          <CardV3 {...card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ListOfCardsV3;
