import React from "react";
import CardV4 from "../CardV4";

const CardV4Info = [
  {
    cardImage:
      "https://cdn2.unrealengine.com/egs-smite-season-of-souls-breaker-1920x1080-d38f94684a80.jpg?h=480&quality=medium&resize=1&w=854",
    cardTitle: "SMITE: actualizaciån Temporada de Almas",
    cardDesc:
      "Sumérgete en el rio Estigia con Titanes desatados, un nuevo mapa de Conquista, Fenrir de tier 5, el evento Forja cromåtica: Prisma de almas y mås.",
    cardPrice: "Juega gratis",
  },
  {
    cardImage:
      "https://cdn2.unrealengine.com/egs-toxic-commando-breaker-1920x1080-308c15adaa3e.jpg?h=480&quality=medium&resize=1&w=854",
    cardTitle: "John Carpenter's Toxic Commando",
    cardDesc:
      "Conduce temibles vehiculos y desata el caos entre hordas de monstruos para salvar el mundo. iEs hora de darlo todo!",
    cardPrice: "Proximamente",
  },
];
const ListOfCardsV4 = () => {
  return (
    <div className="list-of-cards4-section">
      <div className="cards4-container">
        {CardV4Info.map((card, index) => (
          <CardV4 key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ListOfCardsV4;
