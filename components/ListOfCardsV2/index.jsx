import React from "react";
import CardV2 from "../CardV2";

const CardV2Info = [
  {
    cardImage:
      "https://cdn2.unrealengine.com/egs-pid-pub-sale-april-2023-breaker-1920x1080-0f910e34922c.jpg?h=480&quality=medium&resize=1&w=854",
    cardTitle: "Semana de Plug In Digital, PID Games y Dear Villagers 2023",
    cardDesc:
      "Disfruta de increibles descuentos en las joyas indie mås recientes de Dear Villagers, PID Games y mås.",
    cardPrice: "¡Ahorra Hoy!",
  },
  {
    cardImage:
      "https://cdn2.unrealengine.com/egs-ride5-breaker-1920x1080-0e3cc64776a8.jpg?h=480&quality=medium&resize=1&w=854",
    cardTitle: "RIDE 5",
    cardDesc:
      "Prepårate para ir més allå y Vivir la experiencia de conducci6n més realista del mundo con las motos de tus suefios.",
    cardPrice: "59,99 US$",
  },
  {
    cardImage:
      "https://cdn2.unrealengine.com/egs-hogwarts-legacy-breaker-1920x1080-f0c8dffd2781.jpg?h=480&quality=medium&resize=1&w=854",
    cardTitle: "Hogwarts Legacy",
    cardDesc:
      "Toma el control y conviértete en el centro de tu propia aventura en el mundo mågico.",
    cardPrice: "49,99 US$",
  },
];

const ListOfCardsV2 = ({ cards = CardV2Info }) => {
  return (
    <div className="list-of-cards2-section">
      <div className="cards2-container">
        {cards.map((card, index) => (
          <CardV2 key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ListOfCardsV2;
